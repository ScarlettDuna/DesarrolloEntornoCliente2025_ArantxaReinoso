import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Asistente from './components/Asistente.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Asistente />} />
    </Routes>
  );
}

export default App;
