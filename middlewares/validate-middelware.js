const validate=(schema)=>async(req,res,next)=>{
try {
const parseBody=await schema.parseAsync(req.body);
req.body=parseBody;
next();
} catch (err) 
{
    const status=422;
    const extraDetail="fill the input properly"
    const message=err.errors[0].message;
    const error={
        status,
        message,
        extraDetail
    };
    console.log(error);
    // res.status(400).json({msg:message})
    next(error);
    
}
};
module.exports=validate;
