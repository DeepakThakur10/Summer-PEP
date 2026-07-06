import { useState } from 'react'
import Hello from "./Hello.jsx";
import './App.css'
import Form from './form.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Counter</h2>

      <button onClick={() => setCount(count - 1)}>-</button>

      <span style={{ margin: "0 30px" }}>{count}</span>

      <button onClick={() => setCount(count + 1)}>+</button>
      <Hello></Hello>
      <Form />
      
    </>
  )
}

export default App

