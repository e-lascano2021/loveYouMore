import { useState } from 'react'
import SignupForm from './SignupForm'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <>
      <h2>Sign Up</h2>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </>
  )
}

export default Signup
