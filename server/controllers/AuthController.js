const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");
const UserModel = require("../models/User");
//signup logic

const signup=async(req,res)=>{
    try{
        const {name, email, password} = req.body;
        const userExists = await UserModel.findOne({email});
        
        if(userExists){
            return res.status(400).json({error: 'User already exists'});
        }
        
        const user = new UserModel({name, email, password});
        user.password=await bcrypt.hash(password,10);
        await user.save();   
        return res.status(201).json({message: 'User registered successfully'});
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
}

// login logic

const login=async(req,res)=>{
    try{
        const {email, password} = req.body;
        const userExists = await UserModel.findOne({email});
        
        if(!userExists){
            return res.status(403).json({error: 'Email or password not found'});
        }
        
        const isMatch = await bcrypt.compare(password, userExists.password);
        
        if(!isMatch){
            return res.status(403).json({error: 'Email or password not found'});
        }

        const jwtToken=jwt.sign(
            {email: userExists.email},
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )
    
        return res.status(200).json({message: 'Login successfull',
            success:true,
            jwtToken,
            email,
            name: userExists.name
        });
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
}

// exports

module.exports = {
    signup,
    login
};