import BrowniePoints from "../BrowniePoints/BrowniePoints"

const LoveArmyCard = (props) => {
  return (
    <div className="flex-row">
      <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt= "temp"/>

      <div className="flex-column center width-hundred">
        <h2>{props.cardInfo.name}</h2>
        <label>Love Types: </label>
        <h4>{props.cardInfo.loveTypes.join(", ")}</h4>
        <label>Love Languages: </label>
        <h4>{props.cardInfo.loveLanguages.join(", ")}</h4>
        <BrowniePoints soldier={props.cardInfo}/>
      </div>
    </div>
  )
}
export default LoveArmyCard
