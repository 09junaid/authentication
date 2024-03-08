const express=require("express")
const router=express.Router();
const controllers = require("../controllers/signup");
const signupSchema = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middelware");
router.route("/register").post(validate(signupSchema),controllers.register);
module.exports=router;