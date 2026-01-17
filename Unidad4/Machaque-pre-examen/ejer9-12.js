class Cuenta {
    #saldo;
    static contador = 0;
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
        Cuenta.contador ++;
    }
    get saldo(){
        return this.#saldo;
    }
    set saldo(cantidad){
        if (typeof cantidad === 'number'){
            this.#saldo = cantidad
        }
    }
    ingresar(cantidad){
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Ingreso de ${cantidad}€ ha sido efectuada con éxito`);
        } else {
            console.log(`Cantidad errónea`)
        }
    }
    retirar(cantidad){
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Retirada de ${cantidad}€ ha sido efectuada con éxito`);
        } else {
            console.log(`Cantidad errónea o Saldo insuficiente`)
        }
    }
    static mostrarContador(){
        return this.contador;
    }
}
class CuentaPremium extends Cuenta {
    constructor(titular, limite){
        super(titular);
        this.limite = limite;
    }
    retirar(cantidad){
        if (this.saldo + this.limite >= cantidad) {
            this.saldo -= cantidad;
            console.log(`Retirada de ${cantidad}€ ha sido efectuada con éxito. \n Gracias por usar nuestros servicios.`);
        } else {
            console.log(`Límite excedido o saldo insuficiente.`)
        }
    }
}

let myCuenta = new Cuenta('Anchan');
let otraCuenta = new Cuenta('Papa')
console.log(Cuenta.mostrarContador())