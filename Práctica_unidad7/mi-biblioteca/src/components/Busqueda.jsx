import { useState } from "react"
import datosJSON from "../reading-data-clean.json"

export default function Busqueda() {

  const [busqueda, setBusqueda] = useState("")

  const resultados = datosJSON.filter(libro =>
    libro.Título.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div>

      <input
        type="text"
        placeholder="Buscar por título..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {resultados.map((libro, index) => (
        <p key={index}>
          {libro.Título} — {libro.Autor}
        </p>
      ))}

    </div>
  )
}