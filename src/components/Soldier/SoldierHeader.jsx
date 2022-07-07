import BrowniePoints from "../BrowniePoints/BrowniePoints"

const SoldierHeader = (props) =>{

  return (
    <>
    <h1>{props.soldier.name}</h1>
    <BrowniePoints soldier={props.soldier}/>
    </>
  )
}

export default SoldierHeader