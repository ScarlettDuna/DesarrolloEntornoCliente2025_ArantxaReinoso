import datosJSON from "../reading-data-clean.json"

export function recomendarPorMood(mood) {

  let candidatos = []

  if (mood === "romance") {
    candidatos = datosJSON.filter(libro =>
      libro["Géneros"]?.toLowerCase().includes("romance")
    )
  }

  if (mood === "ciencia ficcion") {
    candidatos = datosJSON.filter(libro =>
      libro["Géneros"]?.toLowerCase().includes("ciencia")
    )
  }

  if (mood === "ligero") {
    candidatos = datosJSON.filter(libro =>
      libro["Puntuación "] >= 3
    )
  }

  if (mood === "sorprendeme") {
    candidatos = datosJSON
  }

  if (mood === "intenso") {
    candidatos = datosJSON.filter(libro =>
      libro["Puntuación "] >= 4
    )
  }

  if (candidatos.length === 0) return []

  const indice = Math.floor(Math.random() * candidatos.length)

  return [candidatos[indice]]
}