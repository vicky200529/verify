import db from "./db/db.js"
import express from "express"
import userroutes from "./routes/user.routes.js"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
cors()

const app= express()
const PORT =3000 || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/user/api/",userroutes)



app.listen(PORT,"10.171.22.229",()=>{console.log("running on port 3000")})