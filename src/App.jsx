import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { byvalue, decrement, increment } from './redux/actions/types'

function App() {
  const value = useState(0)
  const {count} = useSelector(state => state)
  const dispatch = useDispatch() // to make action call reducer
  
  const decrementhandler = () => {
    dispatch({type : decrement})
  }
  
  const incrementhandler = () => {
    dispatch({type : increment})
  }
  const handler = (val) => {
    dispatch({type: byvalue, value: val})
  }
  return (
    <>
    <p>{count}</p>
    <button onClick={incrementhandler}>increment</button>
    <button onClick={decrementhandler}>decrement</button>
    <button onClick={() => {handler(5)}}>increment by 5</button>
    </>
  )
}

export default App
