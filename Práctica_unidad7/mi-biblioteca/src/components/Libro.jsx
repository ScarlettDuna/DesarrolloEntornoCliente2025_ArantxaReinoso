export default function Libro({ libro }) {
    return (
        <div>
            <h3>{libro.Título}</h3>
            <p>{libro.Autor}</p>
            <p>Puntuación: {libro["Puntuación "]}</p>
        </div>
    )
}