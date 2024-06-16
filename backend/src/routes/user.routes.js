import { Router } from "express";
import { 
    loginUser,  
    registerUser, 
    logoutUser,
    refreshAccessToken,
    checkAccessToken,
} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.route("/register").post(
    upload.single('avatar'),
    registerUser
    )

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/access-token").post(checkAccessToken)

export default router