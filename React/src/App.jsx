import React from 'react'
import Child from './components/Child'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Skills from './Pages/Skills'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Hooks from './Pages/Hooks'
import State from './Hooks/State'
import Effect from './Hooks/Effect'
import Effect2 from './Hooks/Effect2'

const App = () => {
  var fruits = ["Apple","Banana","Orange"];
  var user = {username:"viky",password:"123456"}
  return (
    <div>
      {/* 
      <Child name="Muthu" phnNum="9876543210" Dept="IT"/>
      */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home items = {fruits} users={user}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/hooks' element={<Hooks/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='/effect' element={<Effect/>}/>
        <Route path='/effect2' element={<Effect2/>}/>
        <Route path='/child' element={<Child name="viky" phnNum="9876543210" Dept="IT"/>}/>
      </Routes>
    </div>
  )
}

export default App
