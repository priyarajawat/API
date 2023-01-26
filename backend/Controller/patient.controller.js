const Patnt = require("../Schema/pateint.schema")
const { body, validationResult } = require('express-validator');

const postUser =async (req,res,next)=>{
const {name,address,email,password,phoneNo,image} =req.body;

const user = new Patnt({
    name,address,email,password,phoneNo,image
});
try{
 
  await user.save();

}
catch(err){
    console.log(err)
    return res.status(500).json({message:err})

}
return res.status(200).json({user})

}
module.exports = postUser;