import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Addproduct from '../components/Addproduct'
import './App.css'

function App() {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addproduct' element={<Addproduct />} />
      </Routes>
    </Router>
  )
}

export default App
