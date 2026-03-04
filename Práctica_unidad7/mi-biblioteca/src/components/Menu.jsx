export default function Menu({ onSelect }) {
    return (
        <div style={{ display: "grid", gap: 8 }}>
            <button onClick={() => onSelect("buscar", "Buscar un libro")}>🔎 Buscar un libro</button>
            <button onClick={() => onSelect("recomendar", "Recomiéndame un libro")}>✨ Recomiéndame un libro</button>
            <button onClick={() => onSelect("leidos", "Ver libros leídos")}>📚 Ver libros leídos</button>
            <button onClick={() => onSelect("noleidos", "Ver libros no leídos")}>📚 Ver libros no leídos</button>
        </div>
    );
}