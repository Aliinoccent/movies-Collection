const { string, required } = require('joi');
const mongoose=require('mongoose');
const movie=mongoose.Schema({
    title:{
    type:String,
    require:true
    },
    year:{
        type:Number,
        requred:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"Registration"
    },
    image:{
    type:String,
    required:true
    }
},


)
module.exports=mongoose.model('Movie',movie)