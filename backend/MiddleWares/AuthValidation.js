const joi = require('joi');
const signupValidation = (req, res, next) => {
    console.log('Signup Validation Triggered'); // Debugging line
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().required(),
        password: joi.string().min(3).max(100).required()
    });

    const { error } = schema.validate(req.body); // Extract error directly from the result

    if (error) {
        return res.status(400)
                .json({ message: 'Bad request', error: error.details });
    }

    next();
}

const loginValidation=(req,res,next)=>{
    const schema=joi.object({
           email:joi.string().required(),
           password:joi.string().min(3).max(100).required()
    });
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400)
                .json({message:'bad request',error})
    }
    next();
}

module.exports={
    signupValidation,
    loginValidation
}