const todo = require('../models/todoModel')


exports.getTodo = async (req,res)=>{
    const todoData = await todo.find();
    res.status(201).json(todoData)
}
exports.getTodoById = async (req,res)=>{
    const todoData = await todo.findById(req.params.id);
    res.status(201).json({todoData})
}
exports.postTodo = async (req,res)=>{
    const {task} = req.body;
    const exist = await todo.findOne({task});
    if(exist) return res.status(401).json({
        message:"Task already exist"
    })
    const newTodo  = new todo({task})
    await newTodo.save();
    res.status(201).json({todo:newTodo})
}
exports.putTodo = async(req,res)=>{
    const update = await todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!update) return res.status(401).json({message:"Task not exist"})
        res.status(201).json({update})
}
exports.deleteTodo = async(req,res)=>{
    const deleteData = await todo.findByIdAndDelete(req.params.id)
    if(!deleteData) return res.status(401).json({message:"user not exist"})
    res.status(201).json({message:"Task Delete successfully"})
}