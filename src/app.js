const express = require("express");
const app = express();  
const connectDB = require("./config/database");
const User = require("./models/user");


//creating a API

app.post("/signup", async (req , res) => {

    
// creating a new instance of the User Model
    const user = new User({

        firstName: "Himanshu",
        lastName: "rane",
        emailId: "abs@rane.com",
        password: "abc123",
    });
  try{
  await user.save();
  res.send("user created");}
  catch(err){
      res.status(400).send("Error: " + err.message);
  }
});

connectDB()
    .then (()=>{

        console.log("database connected");

        app.listen(3000 , () => {
            console.log("server is running on port 3000");
        });
    }).catch((err) => {
        console.log(err);    
    });



