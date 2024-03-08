const Customer = require("../models/User")
const bcrypt=require("bcryptjs")
const register=async(req,res)=>{
try {
 console.log(req.body)
 const {username,email,phone,password}=req.body;
 const Exituser=await Customer.findOne({email});
 if(Exituser){
    console.log("User has been already registerd")
   return res.status(400).json({msg:"User has been already registerd try another account"});
 }
 //--------hash password---------------\\
 const saltRound=10;
 const salt=await bcrypt.genSalt(saltRound);
 const hash_password=await bcrypt.hash(password,salt)
   const createuser=await Customer.create({
      username,
      email,
      phone,
      password:hash_password
   });
   console.log(createuser)
   res.status(201)
   .json({
      msg:"user registered successfully",
      token:await createuser.generateToken(),
      userId:createuser._id.toString(),
      createuser})
 

} catch (error) {
    res.status(500).json({msg:"error occured plz try again later"})
}
}
module.exports={register}