import {useState} from 'react'
import Counter from './components/Counter'
import Button from './components/Button'

const App = () => {
  const [count, setCount] = useState(0)
  
  const increment = () => setCount(count + 1)

  const decrement = () => setCount(count - 1)

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '97vh',
    justifyContent: 'center'
  }

  return (
    <div style={style}>
      <Counter count={count} />
      <div>
        <Button text='+' action={increment} colorDef='#4ab5ff' colorHov='#61beff' />
        <Button text='-' action={decrement} colorDef='#4ab5ff' colorHov='#61beff' />
      </div>
    </div>
  )
}

export default App
