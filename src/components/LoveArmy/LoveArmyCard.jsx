import BrowniePoints from "../BrowniePoints/BrowniePoints"

const LoveArmyCard = (props) => {
  return (
    <>
      <h1>{props.cardInfo.name}</h1>
      <label>LoveTypes: </label>
      <h4>{props.cardInfo.loveTypes.join(", ")}</h4>
      <BrowniePoints soldier={props.cardInfo}/>
    </>
  )
}
export default LoveArmyCard
