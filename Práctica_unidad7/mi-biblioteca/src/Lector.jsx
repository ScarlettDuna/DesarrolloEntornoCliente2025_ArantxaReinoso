import datosJSON from './reading-data-clean.json';

export default function Lector() {
    const datosFormateados = JSON.parse(JSON.stringify(datosJSON), (key, value) => {
        // Si la clave es 'Título', lo ponemos en mayúsculas
        if (key === 'Título' && typeof value === 'string') {
            return value.toUpperCase();
        }
        
        return value;
    });
    const librosValidos = datosFormateados.filter(libro => libro['Puntuación '] !== 0);

    return (
        <div>
            <div style={{ display: 'grid', gap: '15px' }}>
                {librosValidos.map((libro, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
                        <h3>{libro.Título}</h3>
                        <p><strong>Autor:</strong> {libro.Autor}</p>
                        <p><strong>Estado:</strong> {libro.Leido || "No especificado"}</p>
                        <p><strong>Puntuación:</strong> {libro["Puntuación "]}</p>
                        {libro.Comentario && (
                            <p style={{ fontStyle: 'italic', color: '#555' }}>
                                "Comentario: {libro.Comentario}"
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
