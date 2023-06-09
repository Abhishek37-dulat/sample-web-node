import User from "../models/userModel.js";
import emailValidator from 'email-validator';
import Token from "../models/token.js";
import jwt from "jsonwebtoken";

export const userSignup = async (req, res) => {
  try {
    if(emailValidator.validate(req.body.email)){
        const userExit = await User.findOne({ email: req.body.email });
    if (userExit) {
      return res.status(401).json({ message: "email id already exist" });
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json({ message: newUser });        
    }else{
       res.status(400).send('Invalid Email');
    }
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email,password)
    const userExit = await User.findOne({
      email: email,
      password: password,
    });
    if (userExit) {
      const accessToken = jwt.sign(
        userExit.toJSON(),
        process.env.ACCESS_SECRET_KEY,
        { expiresIn: "15m" }
      );
      const refreshToken = jwt.sign(
        userExit.toJSON(),
        process.env.REFRESH_SECRET_KEY
      );
      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      return res.status(200).json({ accessToken: accessToken,
        refreshToken: refreshToken,data: userExit });
    } else {
      return res.status(401).json("Invalid login");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};