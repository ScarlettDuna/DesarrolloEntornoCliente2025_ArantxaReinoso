// src/Chat.jsx
import { useEffect, useState } from "react";
import Menu from "./Menu.jsx";
import Busqueda from "./Busqueda.jsx";
import Recomendador from "./Recomendador.jsx";
import Lector from "./Lector.jsx";

export default function Chat({ setResultadosBusqueda }) {
  const [mensajes, setMensajes] = useState([]);
  const [vista, setVista] = useState("menu"); // menu | buscar | recomendar | leidos

  useEffect(() => {
    setMensajes([
      { autor: "bot", texto: "Hola, soy tu bibliotecaria 📚 ¿Qué quieres hacer?" },
    ]);
  }, []);

  function addMensaje(autor, texto) {
    setMensajes((prev) => [...prev, { autor, texto }]);
  }

  function irA(nuevaVista, textoUsuario) {
    if (textoUsuario) addMensaje("user", textoUsuario);
    setVista(nuevaVista);
    setResultadosBusqueda([]) // o null si usas null = “no he buscado”

    // Respuesta “guiada” del bot según la vista
    if (nuevaVista === "menu") addMensaje("bot", "Elige una opción:");
    if (nuevaVista === "buscar") addMensaje("bot", "Vale. ¿Buscamos por título o por autor?");
    if (nuevaVista === "recomendar") addMensaje("bot", "Perfecto. ¿Qué mood tienes hoy?");
    if (nuevaVista === "leidos") addMensaje("bot", "Estos son tus libros leídos:");
  }

  return (
    <div style={{ flex: 2, margin: "0 auto" }}>
      {/* Mensajes */}
      <div style={{ display: "grid", gap: 8, marginBottom: 16 }}>
        {mensajes.map((m, i) => (
          <div
            key={i}
            style={{
              padding: 10,
              borderRadius: 10,
              border: "1px solid #ddd",
              justifySelf: m.autor === "user" ? "end" : "start",
              maxWidth: "85%",
            }}
          >
            <strong>{m.autor === "user" ? "Tú" : "Bot"}:</strong> {m.texto}
          </div>
        ))}
      </div>

      {/* Contenido guiado */}
      {vista === "menu" && <Menu onSelect={irA} />}

      {vista === "buscar" && (
        <Busqueda
          onBack={() => irA("menu", "Volver al menú")}
          onSay={(texto) => addMensaje("bot", texto)}
          onUser={(texto) => addMensaje("user", texto)}
          onResultados={setResultadosBusqueda}
        />
      )}

      {vista === "recomendar" && (
        <Recomendador
          onBack={() => irA("menu", "Volver al menú")}
          onSay={(texto) => addMensaje("bot", texto)}
          onUser={(texto) => addMensaje("user", texto)}
        />
      )}

      {vista === "leidos" && (
        <div>
          <button onClick={() => irA("menu", "Volver al menú")}>⬅ Volver</button>
          <div style={{ marginTop: 12 }}>
            <Lector />
          </div>
        </div>
      )}

    </div>
  );
}