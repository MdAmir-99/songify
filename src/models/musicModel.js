const mongoose = require("mongoose")
let songSchema = new mongoose.Schema({
    albums:{
    type:String,
    require:true,
    trim:true
   },
   artist:{
    type:String,
    require:true,
    trim:true
   },
   genres:{
    type:[String],
    required:true,
    trim:true
   },
tracks:{
    type:String,
}
},{timestamps:true})
module.exports = mongoose.model("song",songSchema)