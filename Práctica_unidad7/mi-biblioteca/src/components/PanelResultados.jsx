export default function PanelResultados({ resultadosBusqueda }) {
  return (
    <div style={{ flex: 1 }} className="panel-resultados">
      {/* Se ha buscdo y hay resutados*/}
      {resultadosBusqueda.length > 0 && (
        <div>
          <h2>Resultados</h2>
          {resultadosBusqueda.map((libro, index) => (
            <p key={index}>
              {libro.Título} — {libro.Autor}
            </p>
          ))}
        </div>
      )}
      {/* Se ha buscdo, pero no hay resutados*/}
      {resultadosBusqueda.length === 0 && (
        <div>
          <h4>No he encontrado ningún libro con ese criterio 📚</h4>
        </div>
      )}

    </div>
  );
}