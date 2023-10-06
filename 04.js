/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let strRev = num.toString().split("").reverse().join("");
  let str = num.toString();
  if (str === strRev) {
    return true
  } else if (str !== strRev) {
    return false
  }

}
console.log(numeroSimetrico(12345));
console.log(numeroSimetrico(11711));

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico