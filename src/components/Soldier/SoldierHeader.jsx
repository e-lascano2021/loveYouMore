import BrowniePoints from "../BrowniePoints/BrowniePoints"

const SoldierHeader = (props) =>{

  return (
    <>
      <div className="flex-column img-name center">
        <img className="soldier-img" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="soldierpic"></img>
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
        <BrowniePoints edit="edit" name={props.soldier.name} soldier={props.soldier}/>
      </div>
    </>
  )
}

export default SoldierHeader