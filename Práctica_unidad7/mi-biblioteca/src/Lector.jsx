import datos from './reading-data-clean.json'

export default function MostradorLibros() {
    console.log(datos)
    console.log(Object.keys(datos[0]))

    const librosLeidos = datos.filter(libro => libro['Fecha lectura'] !== '')

    return (
        <ol>
            {librosLeidos.map((libro, index) => (
                <li key={index}>
                    <ul>
                        <li>Autor: {libro['Autor']}</li>
                        <li>Título: {libro['Título']}</li>
                    </ul>
                </li>
            ))}
        </ol>

    )
}
