import React, { useContext } from 'react'
import  {Context}  from '../Hooks/Context'

const Contact = () => {
  const user = useContext(Context);
  return (
    <div>
      <h1>Contact Details</h1>
      <h2>Name : {user.name}</h2>
      <h2>Phone Number : {user.phn}</h2>
      <h2>Email : {user.email}</h2>
    </div>
  )
}

export default Contact