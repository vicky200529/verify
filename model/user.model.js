import mongoose from "mongoose";
const user= new mongoose.Schema({
    name:{     
        type:String,
      },

    gmail:{    
         type:String,
        },

    password:{    
         type:String,
        default:"1234567"},

    isverified:{    
         type:Boolean,
        default:false},

    verificationToken:{    
         type:String,
        default:null
        },

    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    }

},{timestamps:true})

export default mongoose.model("verified_users",user)