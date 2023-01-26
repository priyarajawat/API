const mongoose = require('mongoose');

const {Schema,model}=require("mongoose")

const patient = new mongoose.Schema({
    name:{
        type:String,
        required:true,
       
    },
    address:{
        type:String,
        required:true,
        minlength:10
    },
    email:{
        type:String,
        required:true,
         unique: true
    },
    phoneNo:{
        type:Number,
        required:true,
        minlength:10
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:15,
       
        
    },
    image:{
        type:String,
        required:true,
    }
})

const patientModal = model("patnt",patient)

module.exports= patientModal;