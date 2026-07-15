import { Routes, Route } from 'react-router-dom'
// import { useState } from 'react'
import './App.css'

// import pages / sections from here
import Landingpg from './pages/Landingpg'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import ForgotPass from './components/Auth/ForgotPass'
import Onboarding from './pages/Onboarding'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'

export function App() {
  return ( 
  // <Landingpg/>
    // <DashboardLayout>
    //   <Dashboard/>
    // </DashboardLayout>
    <Routes>
      <Route path="/" element={<Landingpg />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPass" element={<ForgotPass />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route
        path='/dashboard'
        element={
          <DashboardLayout>
            <Dashboard/>
          </DashboardLayout>
        }
        />
    </Routes>
  );
}

export default App;