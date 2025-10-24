import { Router } from "express";
import {register,login} from "../controllers/user.controller.js"

const router=Router()

router.get("/register",(req,res)=>{
    res.render("index.ejs")
})
router.post("/register",register)

router.get("/login",(req,res)=>{
    res.render("login.ejs")
})
router.post("/login",login)


export default router