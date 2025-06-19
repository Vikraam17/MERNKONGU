import React from 'react'
import Child from './components/Child'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Skills from './Pages/Skills'
import Counter from './components/Counter'

const App = () => {
  var fruits = ["Apple","Banana","Orange"];
  var user = {username:"viky",password:"123456"}
  return (
    <div>
      {/* <Child name="viky" phnNum="9876543210" Dept="IT"/>
      <Child name="Muthu" phnNum="9876543210" Dept="IT"/>
      <Home items = {fruits} users={user}/>
      <About/>
      <Contact/>
      <Skills/> */}
      <Counter/>
    </div>
  )
}

export default App
