// src/Chat.jsx
import { useEffect, useState, useRef } from "react";
import Menu from "./Menu.jsx";
import Busqueda from "./Busqueda.jsx";
import Recomendador from "./Recomendador.jsx";
import Lector from "./Lector.jsx";
import botIcon from "../assets/bot.jpg"
import userIcon from "../assets/nerdy.webp"
import { recomendarPorMood } from "../utils/recomendador"

export default function Chat({ setResultadosBusqueda }) {
  const [mensajes, setMensajes] = useState([]);
  const [vista, setVista] = useState("menu"); // menu | buscar | recomendar | leidos
  const endRef = useRef(null)

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
    if (nuevaVista === "noleidos") addMensaje("bot", "Estos son tus libros pendientes de leer:");
  } 
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [mensajes])

  function manejarRecomendacion(mood, textoUsuario) {
    addMensaje("user", textoUsuario)

    const libros = recomendarPorMood(mood)

    setResultadosBusqueda(libros)

    addMensaje("bot", "Creo que tengo algo para ti 📚")
  }

  return (
    <div style={{ flex: 2, margin: "0 auto" }} className="chat-container">
      {/* Mensajes */}
      <div style={{ display: "grid", gap: 8, marginBottom: 16, maxHeight: "400px", overflowY: "auto" }}>
        {mensajes.map((m, i) => (
          <div
            key={i}
            style={{
              padding: 5,
              borderRadius: 10,
              border: "1px solid #ddd",
              justifySelf: m.autor === "user" ? "end" : "start",
              maxWidth: "85%",
              display: "flex",
              gap: "7px",
              alignItems: "center",
              flexDirection: m.autor === "user" ? "row-reverse" : "row",
              background: m.autor === "user" ? "#527752" : "#437081"
            }}
          >
            <img
              src={m.autor === "bot" ? botIcon : userIcon}
              alt="avatar"
              style={{ width: 40, height: 40, borderRadious: 35 }}
            />
            <div>
              <strong>{m.autor === "user" ? "Tú" : "Bot"}:</strong> {m.texto}
            </div>
          </div>
        ))}
        <div ref={endRef}></div>
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
          onSelect={manejarRecomendacion}
        />
      )}

      {vista === "leidos" && (
        <div>
          <button onClick={() => irA("menu", "Volver al menú")}>⬅ Volver</button>
          <div style={{ marginTop: 12 }}>
            <Lector mostrarLeidos={true} />
          </div>
        </div>
      )}

      {vista === "noleidos" && (
        <div>
          <button onClick={() => irA("menu", "Volver al menú")}>⬅ Volver</button>
          <div style={{ marginTop: 12 }}>
            <Lector mostrarLeidos={false} />
          </div>
        </div>
      )}

      </div>
      );
      }