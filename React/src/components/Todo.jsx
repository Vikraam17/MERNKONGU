import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const API = 'https://mernkongu.onrender.com'

const Todo = () => {
    const [task,setTask]=useState('');
    const [todos,setTodos] = useState([]);
    const [editing,setEditing] =useState(null)
    const fetchTodo = async() =>{
        const responce = await axios.get(`${API}/todo/`)
        setTodos(responce.data)
    }
    useEffect(()=>{
        fetchTodo()
    },[])
    const handleAddOrEdit = async(e)=>{
        e.preventDefault();
        if(editing){
            await axios.put(`${API}/todo/edit/${editing._id}`,{task})
        }
        else{
            await axios.post(`${API}/todo/create/`,{task})
        }
        setEditing(null)
        setTask('')
        fetchTodo()
    }
    const handleDelete = async (id)=>{
        await axios.delete(`${API}/todo/delete/${id}`)
        fetchTodo()
    }
    const handleToggleStatus = async (todo) =>{
        await axios.put(`${API}/todo/edit/${todo._id}`,{
            status:!todo.status
        })
        fetchTodo()
    }

  return (
    <div>
        <h1>Todos</h1>
        <input type="text" 
               value={task}
               placeholder='Enter the task'
               onChange={(e)=>setTask(e.target.value)}
        />
        <button onClick={handleAddOrEdit}>{editing ?"Update":"Add"}</button>
        <ul>
            {todos.map((todo)=>(
                <li key={todo._id}>
                    <span onClick={()=>{handleToggleStatus(todo)}} style={{cursor:"pointer",
                        textDecoration:todo.status?"line-through":"none"
                    }}>
                        <p>{todo.task}</p>
                    </span>
                    <button onClick={()=>{
                        setEditing(todo)
                        setTask(todo.task)
                    }}>Edit</button>
                    <button onClick={()=>handleDelete(todo._id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo