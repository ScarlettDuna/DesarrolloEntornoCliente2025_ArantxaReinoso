let config = {
    theme: {
        color: 'white'
    }
}
// Asigna ese objeto a otra variable y modifica el tema
let config2 = config;
config2.theme.color = 'red';
// Demuestra que ambos cambian
console.log(config)
// Crea ahora una copia correcta usando spread
let config3 = {
    ...config,
    theme: { ...config.theme }
};
// El spread operator no copia objetos anidados
// Otra opción: let config3 = JSON.parse(JSON.stringify(config));
config3.theme.color = 'purple';
console.log(config3)
