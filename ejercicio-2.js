// 2. Hacer las funciones que sean necesarias para:
// a. Obtener el promedio de notas de un alumno considerando que la suma de notas debe ser el retorno de una 
//función y el promedio el retorno de otra función. Las notas son: 6,8,9,2,5,10.

const notasEscolares = [6,8,9,2,5,10];
let totalNotas = 0;

const suma = (notas) => {
  for(let i=0; i<notas.length; i++) {
    totalNotas = totalNotas + notas[i];
  }
  return totalNotas;
};
suma(notasEscolares);

const promedios = (promedio) => {
  return promedio / notasEscolares.length;
};
console.log(promedios(totalNotas));