const mongoose=require('mongoose');
require('dotenv').config()
const connected=async()=>{
    try{
        await mongoose.connect(process.env.uri)
        console.log("mongodb connecte")
    }
    catch(error){
        console.log("mongodb is not connected");
    }
   
    
}
module.exports={connected}