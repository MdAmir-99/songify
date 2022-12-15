const adminModel = require('../models/adminModel')

const register = async (req,res) =>{
    try{
        let admin = await adminModel.create(req.body)
        return res.status(201).send({data : admin})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    } 
}

const login = async (req,res) =>{
    try{
        let admin = await adminModel.findOne(req.body)
        if(!admin) return res.send({message : 'Admin Not Found !!!'})
        return res.status(200).send({data : admin})
    }
    catch(err){
        return res.status(500).send({message : err.message})
    } 
}


module.exports = {
    register,
    login
}