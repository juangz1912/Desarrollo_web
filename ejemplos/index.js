// Ejemplos de JavaScipt

// Comentario de linea

/**
 * cComentario de bloque
 */

// para imprimir en consola
console.log("Hola mundo")
console.log("-------")

// para guardar una variable se hace

const edad= 18; // entero
let nombre= "Juan Jose"; // string
const apellido="Giraldo";
const esEstudiante = true; //boolean
const altura = 1.70; // float

const semestre=[]; //lista -> Array

const materiaPreferida = { nombre:"Calculo", id:0 } // diccionario -> objeto -> JSON(javascript object notation)

// null - undefined(valor por defecto)
const universidad = null;
const carrera = undefined;

console.log("Tipo de dato de nombre: " + typeof nombre);
console.log("Tipo de dato de edad: " + typeof edad);

console.log("----- Conversion de string a number -----")
const precioMatricula="500000.5";
console.log("entero" + parseInt(precioMatricula))
console.log("flotante" + parseFloat(precioMatricula))

console.log("---- == & === ----");
console.log("Doble igual: ", "45" == 45); // compara el valor
console.log("Triple igual: ", "45" === 45); // compara valor y tipo

console.log("---- concatenacion ----")
console.log(nombre + " " + apellido);
console.log(`${nombre} ${apellido}`);

console.log("---- operador ternario (exp ? verdadero : falso)----");
console.log(edad >= 16 ? "Puede mamar" : "A comer papitas");
let condition = edad > 16
if (condition) {}
if (condition) {} else { }

console.log("--- condicionales ---");
const dia = "LUNES"
switch (dia) {
    case "LUNES":
        console.log("LUNES");
        break;
    case "MARTES":
        console.log("MARTES");
        break;
    default:
        console.log("NO ES VALIDO");
        break;        
}

console.log("--- ciclos ---");
for (let index = 0; index < 10; index++) {

}

// while (condition) {
    
// }

console.log("--- for of ---");
for (const item of [1, 2, 3]) {
    console.log(item);
}

console.log("--- for in ---");
for (const key in materiaPreferida) {
    console.log(key);
}

console.log("--- for each ---");
[1, 2, 3].forEach(element => {
    console.log(element);
});

console.log("--- funciones ---");

function imprimirNombre(nombre) {
    console.log(nombre);
    
}
// Llamar a la funcion 
imprimirNombre(nombre)

const imprimirNombreApellido = (nombre, apellido) => {
    console.log(`${nombre} ${apellido}`);
    
}
imprimirNombreApellido(nombre, apellido)


const crearNombreCompleto = (nombre, apellido) => {
    console.log("-- GLOBAL SCOPE FAKE -- ");
    console.log(nombre, apellido);
    let name = nombre
    if (nombre.length > 3) {
        let name = nombre[0] + " " + apellido
        console.log("94 " + name);
    }
    console.log("92 " + name);


    
}
crearNombreCompleto(nombre, apellido)