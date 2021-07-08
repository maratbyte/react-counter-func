import {useState} from 'react'

const Button = ({text, action, colorDef, colorHov}) => {
  const [bgColor, setBgColor] = useState(colorDef)

  const style = {
    height: '80px',
    width: '80px',
    borderRadius: '50%',
    backgroundColor: `${bgColor}`,
    fontSize: '50px',
    color: 'white',
    border: 'none',
    margin: '10px',
    paddingBottom: '5px',
    cursor: 'pointer'
  }

  return (
    <button
      style={style}
      onClick={action}
      onMouseEnter={() => setBgColor(colorHov)}
      onMouseLeave={() => setBgColor(colorDef)}
    >
      {text}
    </button>
  )
}

export default Button
