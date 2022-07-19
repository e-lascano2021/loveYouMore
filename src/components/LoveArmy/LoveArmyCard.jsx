import BrowniePoints from "../BrowniePoints/BrowniePoints"

const LoveArmyCard = (props) => {
  return (
    <div className="flex-row">
      <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt= "temp"/>

      <div className="flex-column center contain-content width-eighty">
        <h2 className="margin-zero">{props.cardInfo.name}</h2>
        <br/>
        <h6 className="margin-zero">Love Types: </h6>
        <p className="margin-zero">{props.cardInfo.loveTypes.join(", ")}</p>
        <br/>
        <h6 className="margin-zero">Love Languages: </h6>
        <p className="margin-zero">{props.cardInfo.loveLanguages.join(", ")}</p>
        <BrowniePoints soldier={props.cardInfo}/>
      </div>
    </div>
  )
}
export default LoveArmyCard
