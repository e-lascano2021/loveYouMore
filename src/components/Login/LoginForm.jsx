import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../../assets/cssPages/Landing.module.css'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/loveArmy')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <div className={styles.flexEnd}>
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.flexEnd}>
        <label htmlFor="password" className={styles.label}>Password:</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className={styles.button}>Log In</button>
        <button onClick={() => props.handleForm("none")}>Cancel</button>
      </div>
    </form>
  )
}

export default LoginForm
