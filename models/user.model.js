const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    lane1: String,
    lane2: String ,
    lane3:String,
    country  : String,
    pincode : Number
})
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    age : {
        type : Number,
        required: true,   // required means it is mandatory, if not given it will show "Validation Error"
        min :19
    },
    email:{
     type : String,
     required:true,

     lowercase: true,
     minLength: 11
    },
    subjects :[String],
    address: addressSchema

},{versionKey: false,timestamps: true})
mongoose.model("User", userSchema)
module.exports = mongoose.model("User" , userSchema)