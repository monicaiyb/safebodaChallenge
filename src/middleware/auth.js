const mongoose = require("mongoose");
const jwt=require("jsonwebtoken")
const User = require("../models/Users");

const auth=(req,res,next)=>{
    const token=res.header("Authorization").replace("bearer","");
    const data=jwt.verify(token,"weAreWinners");
   // console.log(data);

    const user=await User.findOne({_id, email});
    if(!user){
        return res.status(401).send({message:"UnAuthorised access to this resource"});
    }
    req.user=user;
    req.token=token;
};
next();
 
module.exports=auth;


