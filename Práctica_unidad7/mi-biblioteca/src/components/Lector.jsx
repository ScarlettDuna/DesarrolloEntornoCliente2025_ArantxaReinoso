import datosJSON from '../reading-data-clean.json'

export default function Lector({ mostrarLeidos = true }) {
    const datosFormateados = JSON.parse(JSON.stringify(datosJSON), (key, value) => {
        if (key === 'Título' && typeof value === 'string') {
            return value.toUpperCase();
        }
        return value;
    });

    // Si mostrarLeidos es true, filtramos los que tienen puntuación > 0
    // Si es false, filtramos los que tienen puntuación 0 (no leídos o sin empezar)
    const librosFiltrados = datosFormateados.filter(libro => 
        mostrarLeidos ? libro['Puntuación '] !== 0 : libro['Puntuación '] === 0
    );

    return (
        <div>
            <h3>{mostrarLeidos ? "Mis Libros Leídos" : "Mi Lista de Pendientes"}</h3>
            <div style={{ display: 'grid', gap: '15px' }}>
                {librosFiltrados.length > 0 ? (
                    librosFiltrados.map((libro, index) => (
                        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)' }}>
                            <h3>{libro.Título}</h3>
                            <p><strong>Autor:</strong> {libro.Autor}</p>
                            <p><strong>Estado:</strong> {libro.Leido || "No especificado"}</p>
                            {!mostrarLeidos && <p><strong>Géneros:</strong> {libro.Géneros}</p>}
                            {mostrarLeidos && <p><strong>Puntuación:</strong> {libro["Puntuación "]}</p>}
                            {mostrarLeidos && libro.Comentario && (
                                <p style={{ fontStyle: 'italic', color: '#aaa' }}>
                                    "{libro.Comentario}"
                                </p>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No hay libros en esta categoría.</p>
                )}
            </div>
        </div>
    );
};
