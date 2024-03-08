require("dotenv").config();
const express=require("express");
const ConnectDB = require("./utils/db");
const router = require("./routes/route");
const  errorMiddleware  = require("./middlewares/error-middleware");
const app=express();
app.use(express.json())
app.post("/register",router)
app.use(errorMiddleware);
const PORT=process.env.PORT
ConnectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on the port====> ${PORT}`)
    })
});