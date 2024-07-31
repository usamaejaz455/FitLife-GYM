const JOI=require('joi');

const signupValidation=(req,res,next)=>{
    const schema=JOI.object({
        name:JOI.string().min(3).max(30).required(),
        email:JOI.string().email().required(),
        password:JOI.string().min(8).required()
    });

    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({error:error.details[0].message});
    }
    next();
}

const loginValidation=(req,res,next)=>{
    const schema=JOI.object({
        email:JOI.string().email().required(),
        password:JOI.string().min(8).required()
    });
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({error:error.details[0].message});
    }
    next();
}

module.exports={signupValidation,loginValidation};