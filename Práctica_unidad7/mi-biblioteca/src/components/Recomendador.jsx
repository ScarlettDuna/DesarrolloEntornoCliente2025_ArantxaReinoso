export default function Recomendador({ onBack }) {
    return (
        <div style={{ display: "grid", gap: 8 }}>
            <p>(Aquí irá el recomendador por mood)</p>
            <button onClick={onBack}>⬅ Volver</button>
        </div>
    );
}