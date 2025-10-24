import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../model/user.model.js"
export const register=async(req,res)=>{
    const{name,gmail,password}=req.body
    const hashpwd= await bcrypt.hash(password,10)
try {
 await User.create({
        name,
        gmail,
        password:hashpwd,
    })
}catch (error) {
    console.log(error)
}res.send("the data of user saved into MONGOOSE")
}

export const login=async(req,res)=>{
    const{gamil,password}=req.body
    let roleX=""; 
    const user= await User.findOne({
        gmail,
    })
    const hashpwd_verification= await bcrypt.compare(password,user.password)

const token= jwt.sign(user._id,process.env.SECRET_KEY,{expiresIn:"24hr"})

 if(gmail===process.env.admin){
        roleX="admin"
     }

const usr = await User.create({
     verificationToken:token,
    role:roleX,
})
try {
    if(!user){
    res.status(400).json({
        error:"user doesnot exists",
        success: false,
    })
}
if(!hashpwd_verification){
    res.status(400).json({
        error:"the password is wrong",
        success: false,
    })
}    
if(user.verificationToken===null){
    res.status(400).json({
        error:"token expired",
        success: false,
    })
}   
else{
    res.send("data verified")
}
} catch (error) {
    console.log(error)
}
}