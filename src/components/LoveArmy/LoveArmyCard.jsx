import BrowniePoints from "../BrowniePoints/BrowniePoints"

const LoveArmyCard = (props) => {
  return (
    <>
      <h2>{props.cardInfo.name}</h2>
      <label>Love Types: </label>
      <h4>{props.cardInfo.loveTypes.join(", ")}</h4>
      <label>Love Languages: </label>
      <h4>{props.cardInfo.loveLanguages.join(", ")}</h4>
      <BrowniePoints soldier={props.cardInfo}/>
    </>
  )
}
export default LoveArmyCard
