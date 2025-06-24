const user = require('../models/userModel')

exports.getRoute = async (req,res)=>{
    const userData = await user.find();
    res.status(201).json({data:userData})
}
exports.postRoute = async (req,res)=>{
    const {username,password} = req.body;
    const exist = await user.findOne({username});
    if(exist) return res.status(401).json({
        message:"User already exist"
    })
    const newUser  = new user({username,password})
    await newUser.save();
    res.status(201).json({user:newUser})
}
exports.putRoute = async(req,res)=>{
    const update = await user.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!update) return res.status(401).json({message:"user not exist"})
        res.status(201).json({update})
}
exports.deleteRoute = async(req,res)=>{
    const deleteData = await user.findByIdAndDelete(req.params.id)
    if(!deleteData) return res.status(401).json({message:"user not exist"})
    res.status(201).json({message:"User Delete successfully"})
}