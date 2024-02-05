class Cliente {
    constructor(nombre, sueldo, prestamo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.prestamo = prestamo;
    }

    disponiblePrestamo() {
        if (this.sueldo < 100000) {
            return 0;
        } else if (this.sueldo < 500000) {
            return this.sueldo * 3;
        } else {
            return this.sueldo * 5;
        }
    }

    solicitarPrestamo() {
        let maxPrestamo = this.disponiblePrestamo();
        while (this.prestamo > maxPrestamo) {
            alert(this.nombre + " el monto indicado excede tu disponible.");
            this.prestamo = prompt("¿Cuál es monto de tu préstamo?");
        }
    }
}

let opcionesPrestamo = [
    { sueldoMaximo: 99999, multiplicador: 0 },
    { sueldoMaximo: 499999, multiplicador: 3 },
    { sueldoMaximo: Infinity, multiplicador: 5 }
];

let nombre = prompt("Bienvenidx! Por favor ingresá tu nombre para conocer cuáles son las opciones de crédito que tenemos para vos.");
let sueldo = Number(prompt("Por favor indicanos tu sueldo (en pesos y sin centavos)."));
let prestamo = Number(prompt("¿Cuál es monto de tu préstamo?"));

let usuario = new Usuario(nombre, sueldo, prestamo);

let opcionElegida;
for (let opcion of opcionesPrestamo) {
    if (sueldo <= opcion.sueldoMaximo) {
        opcionElegida = opcion;
        break;
    }
}

if (opcionElegida) {
    alert(usuario.nombre + " lamentablemente no contamos con opciones de créditos para vos.");
} else {
    let maxPrestamo = sueldo * opcionElegida.multiplicador;
    alert(usuario.nombre + " tenés disponible un préstamo de $" + maxPrestamo + ". Tocá aceptar para continuar.");
    usuario.solicitarPrestamo();

    let anios = prompt("Indicanos por favor en cuantos años querés devolver tu préstamo.");

    while (anios > 4) {
        alert("El plazo máximo de devolución es de cuatro años.");
        anios = prompt("Indicanos por favor en cuantos años querés devolver tu préstamo.");
    }

    function valorCuota(prestamo, anios) {
        return prestamo / (anios * 12);
    }

    alert("Devolverás tu préstamo en " + anios * 12 + " cuotas de $" + valorCuota(usuario.prestamo, anios));
}