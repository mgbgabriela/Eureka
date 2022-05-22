/*
Eureka
• Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es
la palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa*/

let contador: number = 1;
let claveIngresada: string = "";

while (contador <= 3 && claveIngresada !== "eureka") {
  claveIngresada = prompt("Introduzca la clave");
  contador++;
}
if (claveIngresada === "eureka") {
  console.log("Clave correcta");
} else {
  console.log("Ya no tiene más intentos");
}
