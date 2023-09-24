const User = require('../models/user');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const sendVerificationEmail = async (email, verificationToken) => {
  console.log(
    '🚀 ~ file: register.js:5 ~ sendVerificationEmail ~ verificationToken:',
    verificationToken,
  );
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'samimarts20@gmail.com',
      pass: 'Mydoor.97',
    },
  });

  const mailDetails = {
    from: 'amazon.com',
    to: email,
    subject: 'Email Verification',
    text: `Please click the following link to verify your email: http://localhost:8000/api/verify/${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailDetails);
  } catch (error) {
    console.log('🚀register.js sendVerificationEmail ~ error:', error);
  }
};
const generateKey = () => {
  return crypto.randomBytes(32).toString('hex');
};
module.exports = {
  post: async (req, res) => {
    console.log('🚀 ~ file: register.js:28 ~ post: ~ req:', req.body);
    try {
      const {name, email, password} = req.body;
      const isUserExist = await User.findOne({email});
      console.log(
        '🚀 ~ file: register.js:8 ~ post: ~ isUserExist:',
        isUserExist,
      );
      if (isUserExist) {
        return res.status(400).json({message: 'Email already exists'});
      }
      const newUser = new User({name, email, password});
      newUser.verificationToken = crypto.randomBytes(20).toString('hex');
      await newUser.save();
      // sendVerificationEmail(newUser.email, newUser.verificationToken);
    } catch (error) {
      console.log('🚀 ~ file: register.js:8 ~ route.post ~ error:', error);
      res.status(500).json({message: 'Registration Failed'});
    }
  },

  verifyEmail: async (req, res) => {
    console.log('🚀  ~ verifyEmail: ~ req params:', req.params);
    try {
      const token = req.params.token;
      const user = await User.findOne({verificationToken: token});
      if (!user) {
        return res
          .status(400)
          .json({message: 'Invalid Email verification token'});
      }
      user.verified = true;
      user.verificationToken = undefined;
      res.status(200).json({message: 'Email verification successfully'});
      await user.save();
    } catch (error) {
      console.log('🚀 ~ file: register.js:52 ~ verifyEmail: ~ error:', error);
      res.status(500).json({message: 'Email verification Failed'});
    }
  },

  login: async (req, res) => {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({email});
      console.log('🚀 ~ file: login.js ~ post: ~ user:', user);
      if (!user) {
        return res.status(400).json({message: 'Invalid Email / Password'});
      }
      if (user.password !== password) {
        return res.status(400).json({message: 'Invalid credientials'});
      }
      const token = await jwt.sign({userId: user._id}, generateKey());
      return res.status(200).json({token});
    } catch (error) {
      console.log('🚀 ~ LOGIN ~ error:', error);
      res.status(500).json({message: 'Login Failed'});
    }
  },
};
