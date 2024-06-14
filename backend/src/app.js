const express=require("express");
const app=express();

const router=express.Router();
const bodyparser=require("body-parser");

const cors = require("cors");
require("dotenv").config()
const port= 3000


const User=require("./userschema")

app.use(cors());
app.use(bodyparser.json());

const middleware=(req,res,next)=>{
  console.log("sumit");
  next();
}


app.get("/",(req,res)=>{
    res.send("hello world"); 
})

app.post("/register",(req,res)=>{
    console.log("sumit is here")
    const { name, email, password, conpassword } = req.body;
    // User.findOne({email:email}).then((userExist)=>{
    //     if(userExist){
    //     return res.status(422).json({error:"email wrong"});} 
        const user=new User({name,email,password,conpassword})
        user.save().then(async()=>{
            // console.log("sumit is here")
             
            // Send email
  

            res.status(200).json({ redirectTo: "/Updates" });
            // res.status(201).json({message:"user registered",redirectTo: "http://localhost:4000/main"});
          
        }).catch((error)=>{
             console.log("your error is: ",error)
        })
          
    })




    app.post("/login",(req,res)=>{
        // console.log("sumit is here")
        const { name, password,conpassword } = req.body;
        User.findOne({password:password,name:name,conpassword:conpassword}).then((userExist)=>{
            if(userExist){
                res.status(200).json({ redirectTo: "/Updates" });} 
            
            else{
                res.status(400).json({error:"Incorrect Credentials" });
            }
                
                // res.status(201).json({message:"user registered",redirectTo: "http://localhost:4000/main"});
              
            }).catch((error)=>{
                 console.log("your error is: ",error)
            })
              
        })   



app.get("/about",middleware,(req,res)=>{
    res.send("hello world about");
})

app.get("/contact",(req,res)=>{
    res.send("hello world contact");
})

app.listen(port,()=>{
    console.log(`server is running ${port}` )
})