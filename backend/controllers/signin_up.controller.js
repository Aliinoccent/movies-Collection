const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/sgin_in/signin_up.Model.js");
require("dotenv").config();
const bcrypt= require('bcrypt')
const securityKey=process.env.secrat_key;

exports.authentication = (req, res, next) => {
  const auth = req.headers["authorization"];
  const token = auth && auth.split(" ")[1];
  jwt.verify(token, securityKey, (error, user) => {
    
      if (error) {
        console.log("token is invalid");
        return res.json({data:'token is invalid',status:false,statuscode:401})
      } else {
        req.user = user;
        next();
      }
  });
};

exports.signUp = async (req, res) => {
  const { email, password, userName } = req.body;
  const already =  await userModel.findOne( {email });
  
  try {
    if (already) {
      return res.json({
        data: "user already exist",
        statuscode: 205,
        status: true,
      });
    } 
    if (!email || !password || !userName){
      res.json({error:'fill all field'});
    }
    else {
      const hashPassword= await bcrypt.hash(password,10)
      const newuser = new userModel({ email, hashPassword, userName });
      const user = await newuser.save();
      res.json({ data: user, status: "ok", success: true, statuscode: 200 });
    }
  } catch (error) {
    res.json({
      data: "empty",
      status: "not ok",
      success: false,
      statuscode: 500,
    });
  }
};

exports.login = async(req, res) => {
  
  try {
    const { email, password } = req.body;
    const userfound =await userModel.findOne({ email});//match user only base of email
    if (userfound) {
      const checkpas= await bcrypt.compare(password,userfound.hashPassword)//plain pass compaire with hash password take from backend
      if(checkpas){
        token = jwt.sign({ email:userfound.email,id:userfound._id  },securityKey);
        res.json({ token, email, id: userfound._id,success: "ok", statuscode: 200 });
      }
      else{
        return res.json({data:"password is not match"});
      }
      
    } else res.json({data:"user email is invalid"});
  } catch (error) {
    res.json({ data: "user not be login ", statuscode: 404 });
  }
};
