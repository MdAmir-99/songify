const express = require("express")
const mongoose = require("mongoose")
const app = express()
let route = require("./route/route")
app.use(express.json())
let port = process.env.PORT ||5000
app.use("/",route)
mongoose.connect("mongodb+srv://vikram2211:niI4v8Tkxl2drjiN@cluster0.iufwb.mongodb.net/songify",{
    useNewUrlParser:true
})
.then(()=>{
    console.log("connected successfully")
})
.catch((err)=>{
    console.log(err.message)
})
app.listen(port,()=>{

    console.log(`port is running on ${port}`)
  
})

