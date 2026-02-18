import { useState } from 'react'
import MostradorLibros from './Lector.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>La biblioteca de Arantxa</h1>
      <MostradorLibros />
      <div className="card">
        <p>Haz click en el botón para contar cuantos libros hemos leido en común</p>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Añade uno
        </button>
      </div>
    </>
  )
}

export default App
