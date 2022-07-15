import BrowniePoints from "../BrowniePoints/BrowniePoints"

const SoldierHeader = (props) =>{

  return (
    <>
      <h1>{props.soldier.name}</h1>
      <label>LoveTypes: </label>
      <h4>{props.soldier.loveTypes?.join(", ")}</h4>
      <label>
        <h4>Brownie Points:</h4>
        <BrowniePoints soldier={props.soldier}/>
      </label>
    </>
  )
}

export default SoldierHeader