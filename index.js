//1.Importaciones
import { sum } from "./lib/calculadora.mjs";

//2.VARIABLES
const getresult = document.querySelector("#get-result");
const result = document.querySelector("#result");
const form = document.querySelector("#form");

//3.Eventos
getresult.addEventListener("click", (event) => {
  //detener la recarga por defecto
  event.preventDefault();

  //astraiga los datos de la variable
  // a. Obtener dato de Formulario
  const quantityOne = form["quantity-one"].value;
  //b. Convertir a entero
  const parseQuatityOne = parseInt(quantityOne);
  const quantitytwo = form["quantity-two"].value;
  const parseQuatitytwo = parseInt(quantitytwo);
  const resultSum = sum(parseQuatityOne, parseQuatitytwo);

  result.innerHTML = resultSum;

  return;
});
