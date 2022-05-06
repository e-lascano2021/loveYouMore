import React, { useState } from 'react'
import Login from '../../components/Login/Login.jsx'
import Signup from '../../components/Signup/Signup.jsx'
import styles from '../../assets/cssPages/Landing.module.css'

const Landing = (props) => {
  const [form, setForm]= useState("none")

  const handleForm = (x) => {
    setForm(x)
  }

  return (
    <main className={styles.container}>

      <div className={styles.top}>
        <h1>Love You</h1>
        <h1>More</h1>
        <p onClick={() => handleForm("LogIn")}>LogIn</p>
        <p onClick={() => handleForm("SignUp")}>Signup</p>
      </div>
      
      <div className={styles.bottom}>
        { form === "LogIn" ?
          <Login {...props}/>
          : form === "SignUp" ?
          <Signup {...props}/> 
          :
          <h4>about the app</h4>
        }
      </div>

    </main>
  )
}

export default Landing
