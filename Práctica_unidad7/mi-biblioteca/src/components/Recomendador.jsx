export default function Recomendador({ onBack, onSelect }) {
  return (
    <div className="suggestions-container">
      <button className="suggestion-btn" onClick={() => onSelect("ligero", "Algo ligerito")}>
        😎 Algo ligerito
        </button>
      <button className="suggestion-btn" onClick={() => onSelect("romance", "Un torrido romance")}>
        😍💖 Un torrido romance
        </button>
      <button className="suggestion-btn" onClick={() => onSelect("ciencia ficcion", "Ciencia ficción")}>
        ⚛️ Ciencia ficción
        </button>
      <button className="suggestion-btn" onClick={() => onSelect("intenso", "Dame algo intensoooo")}>
        🔥 Dame algo intensoooo
        </button>
      <button className="suggestion-btn" onClick={() => onSelect("sorprendeme", "Sorpréndeme")}>
        😯 Sorpréndeme
        </button>
      <button style={{ marginTop: '10px', width: 'fit-content' }} onClick={onBack}>⬅ Volver</button>
    </div>
  );
}
