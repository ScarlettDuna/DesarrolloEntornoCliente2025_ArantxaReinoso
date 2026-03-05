import { useState, useEffect } from "react"
import datosJSON from "../reading-data-clean.json"

export default function Busqueda({ onResultados, onBack }) {

  const [busqueda, setBusqueda] = useState("")
  const [tipoBusqueda, setTipoBusqueda] = useState("Título")

  const resultados = busqueda.trim() === ""
    ? []
    :datosJSON.filter(libro =>
    libro[tipoBusqueda].toLowerCase().includes(busqueda.toLowerCase())
  )
  useEffect(() => {
    if (busqueda.trim() === "") {
      onResultados([])
    } else {
      onResultados(resultados)
    }
  }, [busqueda, resultados, onResultados])

  return (
    <div>
      <select onChange={(e) => {
        setTipoBusqueda(e.target.value)
        setBusqueda("")
      }} >
        <option value="Título">Por título</option>
        <option value="Autor">Por autor</option>
      </select>

      <input
        type="text"
        placeholder={`Buscar por ${tipoBusqueda.toLowerCase()}...`}
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button onClick={onBack}>⬅ Volver</button>

    </div>
  )
}