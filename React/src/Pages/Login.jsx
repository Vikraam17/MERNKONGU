import React, { useState } from 'react'
import './Login.css'
const Login = () => {
    const [formData, setFormdata] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        setFormdata({
            email:'',
            password:''
        })
    }
    const handleChange = (e) => {
        setFormdata((prev) => ({...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>LogIn</h1>
                <label>Email : </label>
                <input type="email" value={formData.email} name='email' onChange={handleChange} placeholder='Enter the Email' />
                <br />
                <label>Password : </label>
                <input type="password" value={formData.password} name='password' onChange={handleChange} placeholder='Enter the Password' />
                <br />
                <button type="submit" style={{display:"inline",width:"60px",marginLeft:"60px"}}>Submit</button>
            </form>
        </div>
    )
}

export default Login