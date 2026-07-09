import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// import pages / sections from here
import Landingpg from './pages/Landingpg'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import ForgotPass from './components/Auth/ForgotPass'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpg />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPass" element={<ForgotPass />} />
    </Routes>
  );
}

export default App;