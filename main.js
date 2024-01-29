let nombre = prompt("Bienvenidx! Por favor ingresá tu nombre para conocer cuáles son las opciones de crédito que tenemos para vos.")
let sueldo = Number(prompt("Por favor indicanos tu sueldo (en pesos y sin centavos)."))
let prestamo = Number(prompt("¿Cuál es monto de tu préstamo?"))

if(sueldo < 100000){
    alert(nombre + " lamentablemente no contamos con opciones de créditos para vos.")
}
else{
    if(sueldo >= 100000 && sueldo < 500000){
        alert(nombre + " tenés disponible un préstamo de $" + sueldo*3 + ". Tocá aceptar para continuar.")
        while(prestamo > sueldo*3){
            alert(nombre + " el monto indicado excede tu disponible.")
            prestamo = prompt("¿Cuál es monto de tu préstamo?")
        }
    }
    else{
        alert(nombre + " tenés disponible un préstamo de $" + sueldo*5 + ". Tocá aceptar para continuar.")
        while(prestamo > sueldo*5){
            alert(nombre + " el monto indicado excede tu disponible.")
            prestamo = prompt("¿Cuál es monto de tu préstamo?")
        }
    }

    let anios = prompt("Indicanos por favor en cuantos años querés devolver tu préstamo.")

    while(anios > 4){
        alert("El plazo máximo de devolución es de cuatro años.")
        anios = prompt("Indicanos por favor en cuantos años querés devolver tu préstamo.")
    }

    function valorCuota(prestamo, anios){
        return prestamo/(anios*12)
    }

    alert("Devolverás tu préstamo en " + anios*12 + " cuotas de $" + valorCuota(prestamo, anios))


}


