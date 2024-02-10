class Usuario {
    constructor(nombre, sueldo, prestamo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.prestamo = prestamo;
    }

    obtenerMaxPrestamo() {
        if (this.sueldo < 100000) {
            return 0;
        } else if (this.sueldo < 500000) {
            return this.sueldo * 3;
        } else {
            return this.sueldo * 5;
        }
    }

    solicitarPrestamo() {
        let maxPrestamo = this.obtenerMaxPrestamo();
        while (this.prestamo > maxPrestamo) {
            alert(this.nombre + " el monto indicado excede tu disponible. Podés solicitar hasta $" + maxPrestamo);
            this.prestamo = prompt("¿Cuál es monto de tu préstamo?");
        }
    }
}

let nombre = prompt("Bienvenidx! Por favor ingresá tu nombre para conocer cuáles son las opciones de crédito que tenemos para vos.");
let sueldo = Number(prompt("Por favor indicanos tu sueldo (en pesos y sin centavos)."));

if (sueldo < 100000) {
    alert("Lamentablemente no contamos con opciones de créditos para vos.");
} else {
    let opcionesPrestamo = [
        { sueldoMaximo: 499999, multiplicador: 3 },
        { sueldoMaximo: Infinity, multiplicador: 5 }
    ];

    let prestamo = Number(prompt("¿Cuál es monto de tu préstamo?"));
    let usuario = new Usuario(nombre, sueldo, prestamo);
    let opcionElegida = opcionesPrestamo.find(opcion => sueldo <= opcion.sueldoMaximo);
    
    if(opcionElegida){
      let maxPrestamo = sueldo * opcionElegida.multiplicador;
    alert(usuario.nombre + " tenés disponible un préstamo de $" + maxPrestamo + ". Tocá aceptar para continuar.");
    }
    usuario.solicitarPrestamo();

    let anios = prompt("Indicanos por favor en cuantos años querés devolver tu préstamo.");

    while (anios > 4) {
        alert("El plazo máximo de devolución es de cuatro años.");
        anios = prompt("Indicanos por favor en cuantos años querés devolver tu préstamo.");
    }

    function valorCuota(prestamo, anios) {
        return prestamo / (anios * 12);
    }

    alert("Devolverás tu préstamo en " + anios * 12 + " cuotas de $" + Math.floor(valorCuota(usuario.prestamo, anios)));
}

const divisas = [
  { moneda: "DOLAR", precio: 1000 },
  { moneda: "EURO", precio: 1200 },
  { moneda: "REAL", precio: 170 },
];

alert("Además contamos con opciones de venta de moneda extranjera.")
let divisa = prompt("Ingrese DOLAR, EURO o REAL para conocer sus precios:");
while(divisa != "DOLAR" && divisa != "EURO" && divisa != "REAL"){
  divisa = prompt("Ingrese DOLAR, EURO o REAL para conocer sus precios:");
};
let divisaElegida = divisas.find((item) => item.moneda === divisa);

if (divisaElegida){
  alert(`
    Moneda: ${divisaElegida.moneda}
    Precio: $ ${divisaElegida.precio}
  `);
}