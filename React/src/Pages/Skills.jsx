import React, { useContext } from 'react'
import { Context } from '../Hooks/Context'

const Skills = () => {
  const user = useContext(Context)
  return (
    <div>
      <h1>Frontend</h1>
      <ul>
        <li>HTML, CSS and JS</li>
        <li>React Js</li>
        <li>React Native</li>
      </ul>
      <h1>Backend</h1>
      <ul>
        <li>Express Js</li>
        <li>Node Js</li>
      </ul>
      
    </div>
  )
}

export default Skills