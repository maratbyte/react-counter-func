import {useState} from 'react'
import Counter from './components/Counter'
import Button from './components/Button'

const App = () => {
  const [count, setCount] = useState(0)
  
  const increment = () => setCount(count + 1)

  const decrement = () => setCount(count - 1)

  return (
    <div className='App'>
      <Counter count={count} />
      <div>
        <Button text='+' action={increment} />
        <Button text='-' action={decrement} />
      </div>
    </div>
  )
}

export default App
