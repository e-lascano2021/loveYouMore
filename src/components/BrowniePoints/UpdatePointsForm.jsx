import React, {useState} from "react"

const UpdatePointsForm = (props) => {
  const [formData, setFormData] = useState({
    currentPoints: 0
  })
  const handleChange = (e) => {
    if (props.math === "Add") {
      setFormData(parseInt(e.target.value)) 
    } else {
      setFormData(parseInt(`-${e.target.value}`))
    }
  }

  return (
    <div className="point-form flex-column center">
      <button onClick={() => props.handleForm(props.math)} >X</button>
      <div>
        <h5> {props.math} points {props.math === "Add"? "to": "from"} {props.name}'s points</h5>
        <form>
          <input type="number" min="0" onChange={handleChange}name="currentPoints"></input>
          <button>math points</button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePointsForm