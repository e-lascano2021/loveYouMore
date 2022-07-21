import React, { useState } from "react"
import UpdatePointsForm from "./UpdatePointsForm"

const BrowniePoints = (props) => {
  const [form, setForm] = useState(false)
  const percentage = (props.soldier.currentPoints / props.soldier.totalPoints) * 100
  const [math, setMath] = useState("")
  
  let color = "rgb(50, 205, 50)"
  if (percentage < 11) {
    color = "#FF0000"
  } else if (percentage < 22 ){
    color = "#FF3C00"
  } else if (percentage < 33){
    color = "#FF7700"
  } else if (percentage < 44 ){
    color = "#FFCD00"
  } else if (percentage < 56 ){
    color = "#FFDE00"
  } else if (percentage < 67 ){
    color = "#E6FF00"
  } else if (percentage < 78 ){
    color = "#B3FF00"
  } else if (percentage < 89 ){
    color = "#66FF66"
  } else{
    color = "#009900"
  }

  const Parentdiv = {
    height: 18,
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  }
  
  const Childdiv = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: color,
    borderRadius:10,
    textAlign: 'right'
  }
  
  const progresstext = {
    color: 'black',
    fontWeight: 500,
    fontSize: '12px',
  }

  const handleForm = (math) => {
    setForm(true)
    setMath(math)
  }




  return (
    <div className="flex-row width-hundred center" >
      {props.edit ? 
        <button onClick={() => handleForm("Subtract")}>-</button> : ""
      }
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>
            {`${props.soldier.currentPoints} / ${props.soldier.totalPoints}`}
          </span>
        </div>
      </div>
      {props.edit ? 
          <button onClick={() => handleForm("Add")}>+</button> : ""
      }
      {form ? 
        <UpdatePointsForm name={props.name} math={math} /> :
        ""
      }
    </div>
  )
}

export default BrowniePoints