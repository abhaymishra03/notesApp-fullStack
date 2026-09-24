const mongoose = require('mongoose');
const dns = require("dns");

dns.setServers(["8.8.8.8"]);


const connectDb = async () => {

  try{
       await mongoose.connect("mongodb+srv://abhay_mishra_03:a1b2h3a4y5@cluster0.msod9hq.mongodb.net/notesDB");
    console.log("Connect to mongoDb");

  }catch(err){
    console.log("Error",err);
    
  } 
    
};

module.exports=connectDb;