const SoldierHeader = (props) =>{

  const percentage = (props.soldier.currentPoints / props.soldier.totalPoints) * 100

  const Parentdiv = {
    height: 18,
    width: '70%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    margin: 50
  }
  
  const Childdiv = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: 'rgb(50, 205, 50)',
    borderRadius:10,
    textAlign: 'right'
  }
  
  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 500,
    fontSize: '12px',
  }

  return (
    <>
    <h1>{props.soldier.name}</h1>
    <div style={Parentdiv}>
    <div style={Childdiv}>
        <span style={progresstext}>{`${props.soldier.currentPoints} / ${props.soldier.totalPoints}`}</span>
      </div>
    </div>
    </>
  )
}
export default SoldierHeader