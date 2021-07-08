const Counter = ({count}) => {
  const style = {
    fontFamily: 'helvetica',
    fontSize: '200px',
    color: '#808080',
    margin: 0
  }
  
  return (
    <p style={style}>{count}</p>
  )
}

export default Counter
