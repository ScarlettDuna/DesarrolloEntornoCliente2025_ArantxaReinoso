import Chat from './components/Chat.jsx'
import PanelResultados from './components/PanelResultados.jsx'
import { useState } from 'react'

function App() {
  const [resultadosBusqueda, setResultadosBusqueda] = useState([])  

  return (
    <>
      <h1>La biblioteca de Arantxa</h1>
      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
      <Chat setResultadosBusqueda={setResultadosBusqueda} />
      <PanelResultados resultadosBusqueda={resultadosBusqueda}/>
      </div>
    </>
  )
}

export default App
