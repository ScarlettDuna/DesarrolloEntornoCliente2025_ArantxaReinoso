import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Saludo from './Saludo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Saludo name={"Anchan"}/>
        <Saludo name={"Coryo"}/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>{count}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          Add
        </button>
        <button onClick={() => setCount((count) => count > 1 ? count - 1 : count)}>
          Substract
        </button>
        <button onClick={() => setCount(0)} >Reset</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
