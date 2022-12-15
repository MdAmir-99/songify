const mongoose = require("mongoose")
let adminSchema = new mongoose.Schema({
   name:{
    type:String,
    require:true,
    trim:true
   },
   email:{
    type:String,
    require:true,
    trim:true
   },
   password:{
    type:String,
    required:true,
    trim:true
   }
},{timestamps:true})
module.exports = mongoose.model("Admin",adminSchema)