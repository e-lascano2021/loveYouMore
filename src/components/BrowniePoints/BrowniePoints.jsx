const BrowniePoints = (props) => {
  const percentage = (props.soldier.currentPoints / props.soldier.totalPoints) * 100
  let color = "rgb(50, 205, 50)"
  if (percentage < 50) {
    color = "red"
  }

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
    backgroundColor: color,
    borderRadius:10,
    textAlign: 'right'
  }
  
  const progresstext = {
    color: 'black',
    fontWeight: 500,
    fontSize: '12px',
  }

  return (
    <>
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>
          {`${props.soldier.currentPoints} / ${props.soldier.totalPoints}`}
        </span>
      </div>
    </div>
    </>
  )
}

export default BrowniePoints