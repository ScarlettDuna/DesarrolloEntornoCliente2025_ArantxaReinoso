export default function Menu({ onSelect }) {
    return (
        <div className="suggestions-container">
            <button className="suggestion-btn" onClick={() => onSelect("buscar", "Buscar un libro")}>🔎 Buscar un libro</button>
            <button className="suggestion-btn" onClick={() => onSelect("recomendar", "Recomiéndame un libro")}>✨ Recomiéndame un libro</button>
            <button className="suggestion-btn" onClick={() => onSelect("leidos", "Ver libros leídos")}>📚 Ver libros leídos</button>
            <button className="suggestion-btn" onClick={() => onSelect("noleidos", "Ver libros no leídos")}>📚 Ver libros no leídos</button>
        </div>
    );
}
