import mongoose from "mongoose";
let uri = process.env.mongo_uri
export default function mongo(uri){mongoose.connect(uri,{dbName:"verification"}).then(()=>{
    console.log("db connection done")
}).catch((err)=>{
    console.log(err)})}