const  jwt  = require("jsonwebtoken");
const {Schema,model}=require("mongoose")

// user schema
const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true 
    },
    isAdmin:{
       type:Boolean,
       default:false 
    }
});
userSchema.methods.generateToken=async function (){
try {
   return jwt.sign({
    userId:this._id.toString(),
    email:this.email,
    isAdmin:this.isAdmin
    },
    await process.env.JWT_SECRET_KEY,{
      expiresIn:"2d"  
    })
} catch (error) {
    console.error(error)
}
}
const Customer=new model("Customer",userSchema);
module.exports=Customer;