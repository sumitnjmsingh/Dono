import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { User} from "../models/userschema.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";



const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        // console.log(user);
        const accessToken = user.generateAccessToken()
        // console.log(accessToken)
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}



const registerUser = asyncHandler( async (req, res) => {


    const {name, email, password, avatar } = req.body

    if (
        [name, email, password, avatar].some((field) => field?.trim() === "")  //If user is null or undefined, accessing user.name directly would throw an error. However, with user?.name, if user is null or undefined, username will be undefined instead of throwing an error.
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ name }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }
    
    const avatarLocalPath = req.files?.avatar[0]?.path;
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar on server file is required")
    }

    const avatar1 = await uploadOnCloudinary(avatarLocalPath)

    if (!avatar1) {
        throw new ApiError(400, "Avatar file is required")
    }


   

    const user = await User.create({
        name,
        avatar: avatar1.url,
        email, 
        password,
        
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken "
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    // return res.status(201).json(
    //     new ApiResponse(200, createdUser, "User registered Successfully")
    // )
   return res.status(200).json({ redirectTo: "/Updates" });

} )

const loginUser = asyncHandler(async (req, res) =>{
   

    const {name, password} = req.body


    if (!name) {
        // throw new ApiError(400, "username  is required")
        res.status(400).json({error:"Fullname  is required" });
    }
    

    const user = await User.findOne({
        name
    })
    
    if (!user) {
        // throw new ApiError(404, "User does not exist")
        res.status(404).json({error:"User does not exist" });
    }

   const isPasswordValid = await user.isPasswordCorrect(password)

   if (!isPasswordValid) {
    res.status(400).json({error:"Incorrect Credentials" });
    }

   
    const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    // console.log(loggedInUser)


   

    

    const options = {
        httpOnly: true,
        secure: true,
        
    }

    // return res.status(200).json({ redirectTo: "/Updates" });
    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
       
            {
                redirectTo: "/Updates",   user: loggedInUser, accessToken, refreshToken
            }
            
        )
    


})


const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
})


export {
    registerUser,
    loginUser,
    logoutUser,
}