import React from "react"

const UpdatePointsForm = (props) => {
  return (
    <div className="point-form flex-column center">
      <div>
        <h5> {props.math} points {props.math === "Add"? "to": "from"} {props.name}'s points</h5>
        <form>
          <input type="number" name="currentPoints"></input>
          <button> math points</button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePointsForm