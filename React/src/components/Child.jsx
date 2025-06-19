import React from 'react'

const Child = ({name,phnNum,Dept}) => {
  return (
    <div>
        <h1>Name: {name}</h1>
        <h1>Phone Number: {phnNum}</h1>
        <h1>Department: {Dept}</h1>
    </div>
  )
}

export default Child