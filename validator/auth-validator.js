const {z}=require("zod")
const signupSchema=z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast 3 chars"})
    .max(255,{message:"Name must not more than 255 character"}),
    
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"email must be atleast 3 chars"})
    .max(255,{message:"email must not more than 255 character"}),
    
    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"phone must be at least 10 chars"})
    .max(20,{message:"Name must not more than 20 character"}),
    
    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(7,{message:"password must be at least 6 chars"})
    .max(1024,{message:"password must not more than 1024 character"}),
    });
    module.exports=signupSchema;
    