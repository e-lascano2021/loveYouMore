import BrowniePoints from "../BrowniePoints/BrowniePoints"

const LoveArmyCard = (props) => {
  return (
    <>
      <h1>{props.cardInfo.name}</h1>
      <BrowniePoints soldier={props.cardInfo}/>
    </>
  )
}
export default LoveArmyCard
