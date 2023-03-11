/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function mayorMenosMenor(arr) {
  // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
  // NOTA: No utilizar los métodos "min" y "max" de "Math".
  //
  // Tu código:
  
  function mayorMenosMMenor(arr) {
  let minNumber = array[0];
  let maxNumber = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }

  return {
    min: minNumber,
    max: maxNumber
  };
}

function mayorMenosMMenor(arr) {
  let minNumber = array[0];
  let maxNumber = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }

  return maxNumber - minNumber;
}

const array = [4, 7, 1, 9, 2, 5];
const difference = mayorMenosMMenor(arr);
console.log(difference); 


};

// No modifiques nada debajo de esta linea //

module.exports = mayorMenosMenor
