/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function ingredienteEnMalEstado(menu, comida, ingrediente) {
  // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
  // ya que deben estar contaminados también.
  // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
  // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
  // diferencia.
  // Ej:
  /* let menuDelDia = {
      raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
      bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
      tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
  } */
  // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
  // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
  // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
  // NOTA: No utilizar el método "includes".
  //
  // Tu código:
  

  const indice = menu.findIndex(comida => comida.includes(ingrediente));
    
  if (indice === -1) {
    return "El menú está perfecto";
  }

  const ingredientesProximos = [];

  for (let i = indice - 1; i <= indice + 1; i++) {
    
    
    if (i >= 0 && i < menu.length && i !== indice) {
      ingredientesProximos.push(...menu[i]);
    }
  }
  

  ingredientesProximos.push(ingrediente);
  return ingredientesProximos;
}

const menu = [
  ['tomate', 'cebolla', 'ajo'],
  ['papa', 'zanahoria', 'cebolla', 'lechuga'],
  ['manzana', 'banana', 'kiwi']
];

const malEstado = 'papa';
const resultado = revisarMenu(menu, malEstado);
console.log(resultado); // debería mostrar ['zanahoria', 'cebolla', 'lechuga', 'papa'] 


};


// No modifiques nada debajo de esta linea //

module.exports = ingredienteEnMalEstado
