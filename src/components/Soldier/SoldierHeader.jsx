import BrowniePoints from "../BrowniePoints/BrowniePoints"

const SoldierHeader = (props) =>{

  return (
    <>
      <h1>{props.soldier.name}</h1>
      <label>Love Types: </label>
      <h4>{props.soldier.loveTypes?.join(", ")}</h4>
      <label>Love Languages: </label>
      <h4>{props.soldier.loveLanguages?.join(", ")}</h4>
      <label>
        <h4>Brownie Points:</h4>
      </label>
        <BrowniePoints soldier={props.soldier}/>
    </>
  )
}

export default SoldierHeader