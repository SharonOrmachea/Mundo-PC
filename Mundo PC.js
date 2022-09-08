class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Mouse extends DispositivoEntrada{
    static contadorMouse = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idMouse = ++Mouse.contadorMouse;
    }
    get idMouse(){
        return this._idMouse;
    }
    toString(){
        return `Mouse: [idMouse: ${this._idMouse}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let mouse1 = new Mouse("USB", "AOAS");
let mouse2 = new Mouse("Bluetooth", "Noga")
console.log(mouse1.toString());
console.log(mouse2.toString());

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}   

let teclado1 = new Teclado("USB", "ReDragon");
let teclado2 = new Teclado("Bluetooth", "Noga");
console.log(teclado1.toString());
console.log(teclado2.toString())

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}

let monitor1 = new Monitor("Samsung", 32);
let monitor2 = new Monitor("LG", 32);
console.log(monitor1.toString());
console.log(monitor2.toString())

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, mouse, teclado, monitor){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._mouse = mouse;
        this._teclado = teclado;
        this._monitor = monitor;
    }
    toString(){
        return `Computadora: ${this._idComputadora}: ${this._nombre} \n ${this._mouse} \n ${this._teclado} \n ${this._monitor}`;
    }
}

let computadora1 = new Computadora("AMD", mouse1, teclado1, monitor1);
let computadora2 = new Computadora("AMD", mouse2, teclado2, monitor2)
console.log(computadora1.toString());
console.log(computadora2.toString());

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = "";
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();