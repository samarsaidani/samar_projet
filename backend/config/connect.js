const mongoose = require('mongoose');
require('dotenv').config()

const ConnectDB = async()=>{
    try{
        await  mongoose.connect(process.env.DB_URI) 
        console.log("data connect sucsess");
    }
    catch(err){
        console.log(err);
    }     
    }
    module.exports = ConnectDB ;
