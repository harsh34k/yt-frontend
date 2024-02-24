import { useState } from 'react'
import { ExampleNavbarFour } from './components/Navbar'
import { Signin } from './components/Signin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
// import { Router } from 'express'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <ExampleNavbarFour />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="liked-videos" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
