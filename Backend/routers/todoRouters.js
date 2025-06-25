const express = require('express');
const todoRoute = express.Router();
const {getTodo,postTodo,getTodoById,putTodo,deleteTodo} = require('../controllers/todoController')
todoRoute.get('/',getTodo);
todoRoute.get('/:id',getTodoById);
todoRoute.post('/create',postTodo);
todoRoute.put('/edit/:id',putTodo);
todoRoute.delete('/delete/:id',deleteTodo);
module.exports = todoRoute