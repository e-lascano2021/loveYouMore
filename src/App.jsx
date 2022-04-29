import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './components/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import LoveArmy from './pages/LoveArmy/LoveArmy'
import LoveArmyForm from './pages/LoveArmy/LoveArmyForm'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      { user ? 
        <NavBar handleLogout={handleLogout} /> 
      : 
        ""
      }
      <Routes>
        <Route path="/" element={<Landing handleSignupOrLogin={handleSignupOrLogin}/>} />
        <Route
          path="/loveArmy"
          element={user ? <LoveArmy/>: <Navigate to="/login" />}
        />
        <Route
          path="/loveArmy/new"
          element={user ? <LoveArmyForm/>: <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
