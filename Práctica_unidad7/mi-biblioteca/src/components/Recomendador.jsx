import { useState } from "react";

export default function Recomendador({ onBack, onSelect }) {

  const [mood, setMood] = useState("")

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <button onClick={() => onSelect("ligero", "Algo ligerito")}>
        😎 Algo ligerito
        </button>
      <button onClick={() => onSelect("romance", "Un torrido romance")}>
        😍💖 Un torrido romance
        </button>
      <button onClick={() => onSelect("ciencia ficcion", "Ciencia ficción")}>
        ⚛️ Ciencia ficción
        </button>
      <button onClick={() => onSelect("intenso", "Dame algo intensoooo")}>
        🔥 Dame algo intensoooo
        </button>
      <button onClick={() => onSelect("sorprendeme", "Sorpréndeme")}>
        😯 Sorpréndeme
        </button>
      <button onClick={onBack}>⬅ Volver</button>
    </div>
  );
}