import Chat from './Chat.jsx'
import PanelResultados from './PanelResultados.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Asistente() {
  const [resultadosBusqueda, setResultadosBusqueda] = useState([])  

  const navStyle = {
    padding: '15px 30px',
    background: 'rgba(22, 33, 62, 0.8)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    position: 'sticky',
    top: '10px',
    zIndex: 1000
  };

  const linkStyle = {
    color: '#e94560',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1em',
    transition: 'all 0.3s ease'
  };

  return (
    <>
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px',
        padding: '0 10px'
      }}>
        <nav style={{ ...navStyle, marginBottom: 0, padding: '10px 20px', flex: '0 1 auto' }}>
          <Link to="/" style={linkStyle} className="nav-link">🏠 Inicio</Link>
          <Link to="/chat" style={linkStyle} className="nav-link">🤖 Asistente</Link>
        </nav>
        <h1 style={{ margin: 0, fontSize: '1.8em', flex: '1', textAlign: 'right' }}>
          La biblioteca de Arantxa
        </h1>
      </header>
      
      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }} className='app-layout'>
        <Chat setResultadosBusqueda={setResultadosBusqueda} />
        <PanelResultados resultadosBusqueda={resultadosBusqueda}/>
      </div>
    </>
  )
}
