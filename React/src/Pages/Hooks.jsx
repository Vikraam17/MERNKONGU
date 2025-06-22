import React from 'react'
import { Link } from 'react-router-dom'
import './Hooks.css'
const Hooks = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",marginTop:"10px"}}>
        <Link className='LinkHook' to='/State'>useState</Link>
        <Link className='LinkHook' to='/effect'>useEffect</Link>
        <Link className='LinkHook' to='/effect2'>useEffect Eg:2</Link>
        <Link className='LinkHook' to='/ref'>useRef</Link>
        <Link className='LinkHook' to='/reducer'>useReducer</Link>
    </div>
  )
}

export default Hooks