import React, { useState } from 'react'
import Login from '../../components/Login/Login.jsx'
import Signup from '../../components/Signup/Signup.jsx'
// import styles from './Landing.module.css'

const Landing = (props) => {
  const [form, setForm]= useState("none")

  const handleForm = (x) => {
    setForm(x)
  }

  return (
    <main>
      <div>
        <h6>Love You</h6>
        <h6>More</h6>
        <p onClick={() => handleForm("LogIn")}>LogIn</p>
        <p onClick={() => handleForm("SignUp")}>Signup</p>
      </div>

      { form === "LogIn" ?
        <Login {...props}/>
      : form === "SignUp" ?
        <Signup {...props}/> 
      :
        <div>
          <h4>about the app</h4>
        </div>
      }
    </main>
  )
}

export default Landing
