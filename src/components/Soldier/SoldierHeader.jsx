import BrowniePoints from "../BrowniePoints/BrowniePoints"

const SoldierHeader = (props) =>{
  return (
    <>
      <div className="flex-column img-name center">
        <img className="soldier-img" src={props.soldier.image} alt="soldierpic"></img>
        <h2 className="margin-zero">{props.soldier.name}</h2>
      </div>
      <div className="flex-column center header-right">
        <h6 className="margin-zero">Love Types: </h6>
        <p className="margin-zero">{props.soldier.loveTypes?.join(", ")}</p>
        <br/>
        <h6 className="margin-zero">Love Languages: </h6>
        <p className="margin-zero">{props.soldier.loveLanguages?.join(", ")}</p>
        <br/>
        <h6 className="margin-zero">Brownie Points:</h6>
        <BrowniePoints edit="edit" id={props.soldier._id} name={props.soldier.name} soldier={props.soldier}/>
      </div>
    </>
  )
}

export default SoldierHeader