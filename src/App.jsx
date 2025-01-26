import React from 'react'
import Login from './Login'
import Signin from './Signin'
import Course from './Course'
import Home from './Home' 
import Dashboard from './dashboard'

import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signin" element={<Signin></Signin>} />
      <Route path="/course" element={<Course></Course>} />
      <Route path="/dashboard" element={<dashboard></dashboard>}/>
      <Route path="/register" element={<register></register>}/>

  
    </Routes>
  
  )
}

export default App