const UserModel = require("../Models/User");
const bcrypt=require('bcrypt')
require('dotenv').config();
const jwt=require('jsonwebtoken')
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: 'This user already exists. Please login.',
                success: false
            });
        }

        // Create new user
        const userModel =await new UserModel({ name, email, password });
        userModel.password=await bcrypt.hash(password,10)
        await userModel.save();

        res.status(200).json({
            message: 'User created successfully',
            success: true
        });

    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            success: false,
            error: err.message || err
        });
    }
};

const login = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(409).json({
                message: 'email and password is incorrect',
                success: false
            });
        }
      const isPassEqual=await bcrypt.compare(password,user.password)
      if(!isPassEqual){
        return res.status(403).json({
            message: 'email and password is incorrect',
            success: false
        });
      }
      const jwtToken=jwt.sign(
        {email:user.email,_id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:'24h'}
        
      )
        
      

        res.status(200).json({
            message: 'User login successfully',
            success: true,
            jwtToken,
            email,
            name:user.name
        });

    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            success: false,
            error: err.message || err
        });
    }
};



module.exports={
    signup,
    login
}