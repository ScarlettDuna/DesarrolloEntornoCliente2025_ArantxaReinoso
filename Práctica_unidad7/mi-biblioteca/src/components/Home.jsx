import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '70vh', 
      textAlign: 'center',
      padding: '20px' 
    }}>
      <h1 style={{ textAlign: 'center', width: '100%', fontSize: '3em', marginBottom: '20px' }}>
        ¡Bienvenido a la Biblioteca Virtual de Arantxa! 📚
      </h1>
      <p style={{ fontSize: '1.2em', maxWidth: '600px', marginBottom: '30px' }}>
        Explora nuestra colección y habla con nuestra bibliotecaria virtual para recibir recomendaciones personalizadas.
      </p>
      <Link to="/chat">
        <button style={{ padding: '15px 30px', fontSize: '1.3em' }}>
          Entrar al Chat
        </button>
      </Link>
    </div>
  );
}
