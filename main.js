let nombre = prompt("Bienvenidx! Por favor ingresá tu nombre para conocer cuáles son las opciones de crédito que tenemos para vos.")
let sueldo = prompt("Por favor indicanos tu sueldo (en pesos y sin centavos).")

if(sueldo < 100000){
    alert(nombre + " lamentablemente no contamos con opciones de créditos para vos.")
}
else if(sueldo >= 100000 && sueldo < 500000){
    alert(nombre + " tenés disponible un préstamo de $" + sueldo*3 + ". Tocá aceptar para continuar.")
}
else{
    alert(nombre + " tenés disponible un préstamo de $" + sueldo*5 + ". Tocá aceptar para continuar.")
}
