const express= require('express');
const user=require('../models/sgin_in/signin_up.Model.js')
const movieModel=require('../models/movie/movie.model.js');
exports.getAllUser=async(req,res)=>{
const users=await user.find();
try{
    if(users){
        return res.json({data:users,status:true,statuscode:200})
    }
    else res.json({data:'user not found',status:true,success:203})
}catch(error){
    return res.json({status:false,statuscode:404})
}
}

exports.getById=async (req,res)=>{
    const founduser=await user.findById(req.params.id);
    console.log('this is user',founduser);
    try{
    if(!founduser){
        return res.json({data:'user id is not exist',status:false,statuscode:404})
    }
    else if( founduser&& req.params.id===req.user.id.toString()){

        const movieData=await movieModel.find({user:req.params.id});
    
        return res.json({data:founduser,movieData,status:true,statuscode:200})
    }
}catch(error){
    console.log(error);
}
}
