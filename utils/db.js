const mongoose=require("mongoose")
const URI=process.env.MONGODB_URI
const ConnectDB=async()=>{
    try {
        await mongoose.connect(URI)
        console.log("Connection has been successfully 👏👏👏");
    } catch (error) {
        console.log("Connection error")
    }
}
module.exports=ConnectDB;