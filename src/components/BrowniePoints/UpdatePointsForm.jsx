import React, {useState} from "react"
import { updatePoints } from "../../services/profileService"

const UpdatePointsForm = (props) => {
  const [formData, setFormData] = useState({
    currentPoints: 0
  })
  const handleChange = (e) => {
    if (props.math === "Add") {
      setFormData({ ...formData, [e.target.name] :parseInt(e.target.value)}) 
    } else {
      setFormData({ ...formData, [e.target.name] :parseInt(`-${e.target.value}`)})
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await updatePoints(props.id, formData)
      e.target.reset()
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="point-form flex-column center">
      <button onClick={() => props.handleForm(props.math)} >X</button>
      <div>
        <h5> {props.math} points {props.math === "Add"? "to": "from"} {props.name}'s points</h5>
        <form onSubmit={handleSubmit}>
          <input type="number" min="0" onChange={handleChange}name="currentPoints"></input>
          <button>math points</button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePointsForm