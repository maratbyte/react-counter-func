import {useState} from 'react'

const Button = ({text, action, colorDef, colorHov}) => {
  const [state, setState] = useState({hover: false, pushed: false})

  const style = {
    height: '80px',
    width: '80px',
    borderRadius: '50%',
    backgroundColor: `${state.hover ? colorHov : colorDef}`,
    fontSize: '50px',
    color: 'white',
    border: 'none',
    margin: '10px',
    paddingBottom: '5px',
    cursor: 'pointer',
    boxShadow: `${state.hover ? '0px 5px 40px -10px rgba(0, 0, 0, 0.6)' : ''}`,
    textShadow: `${state.hover ? '0px 0px 6px rgba(255, 255, 255, 1)' : ''}`,
    transform: `${state.pushed ? 'scale(0.9)' : ''}`
  }

  return (
    <button
      style={style}
      onClick={action}
      onMouseEnter={() => setState({hover: true, pushed: state.pushed})}
      onMouseLeave={() => setState({hover: false, pushed: state.pushed})}
      onMouseDown={() => setState({hover: state.hover, pushed: true})}
      onMouseUp={() => setState({hover: state.hover, pushed: false})}
    >
      {text}
    </button>
  )
}

export default Button
