import express from 'express';
import UserModel from '../Models/UserModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // Make sure this is imported

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET); // Corrected: use 'id', not 'user._id'
};

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({ name, email, password: hashedPassword });
    const user = await newUser.save(); // 'user' is defined here

    const token = createToken(user._id); // Now safe to use user._id
    return res.status(201).json({ success: true, token });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const login=async(req,res)=>{
    const {email,password}=req.body;

    const newmodel=await UserModel.findOne({email});
    if(!newmodel)
      return res.status(201).json({
         message:"email not exsist , signup first then login"
    });
    const ismatch= bcrypt.compare(password,user.password);
    if(!ismatch){
       return res.status(300).json({message:"Enter the Correct Password"});
    }
    const token = createToken(user._id)
    return res.status(200).json({message:"login successfully"},token)
}

export {login,signup};