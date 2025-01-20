const mongoose=require('mongoose');

const signin_up=mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    hashPassword:{
        type:String,
        required:true,

    },
    userName:{
        type:String
    }
})
module.exports=mongoose.model('Registration',signin_up)