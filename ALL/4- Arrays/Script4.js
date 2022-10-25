// ARRAYS
// COLLECCION ORDENADA DE VALORES

// 1- FORMAS DE DECLARAR UN ARRAY

// const otroArray = new Array();

// const miArray = ["Mochila de Matias", "Cartera de Maria"];

// console.log(miArray);

// const otroNuevoArray = [["Juan", 30, {}], "Matias", 2, true, {}, () => {}];
// console.log(otroNuevoArray.length);

// const element = miArray[0];
// Para acceder
// console.log(`En ese casillero esta guardada la ${miArray[0]}`);

// console.log(miArray[0]);

// miArray[0] = "La cartera de Juliana";
// console.log(miArray[0]);

//Acceder al primer elemento
// const miArray = ["Matias", "Pedro", "Marcela", "Cristiano", "Luis", "Rey"];

// const firstElement = miArray[0];

// console.log(firstElement);

//Acceder al ultimo

// const lastElement = miArray[miArray.length - 1];
// console.log(lastElement);

// console.log(miArray.length - 1);

//Buscar el indice de un elemento

// const elemento = "Pedro";

// //indexOf

// //si no esta el elemento en el array el valor devuelto es -1

// const index = miArray.indexOf(elemento);

// console.log(index);

// console.log(miArray[index]);

//Metodos para comentar elementos del Array

// const miArray = ["Matias", "Esteban", "Pedro", "Cristian", "Vanesa"];

// // miArray[miArray.indexOf("Matias")] = "Martina";

// // console.log(miArray);

// //Agregar un elemento al finla del array

// //PUSH

// const newLength = miArray.push("Jorge");
// console.log(newLength);
// console.log(miArray);

// //Remover un elemento del finla del array

// //POP

// const removeElement = miArray.pop();

// // console.log(removeElement);

// // console.log(miArray);

//Agregar un elemento al principio del Array

//UNSHIFT

// const newLength = miArray.unshift("Jorge");
// // console.log(newLength);
// // console.log(miArray);

// //Remover un elemento del principio del Array

// //SHIFT

// const removedElement = miArray.shift();

// console.log(removedElement);
// console.log(miArray);

//SPLICE

//REMOVER SERIE DE ELEMENTOS DEL ARRAY
// console.log(miArray);
// console.log(miArray.splice(1, 2));

// console.log(miArray);

//SLICE

//recortar un array

// const newArray = miArray.slice(1, 3);
// console.log(miArray);
// console.log(newArray);

//Iterar sobre un array

// const miArray = [
//   "Alexis",
//   "Juan",
//   "Pedro",
//   "Marcelo",
//   "Luis",
//   "Armando",
//   "Martina",
// ];

//length
//iterar sobrre un array con FOR
// for (let i = 0; i < miArray.length; i++) {
//   console.log(miArray[i]);
// }

// for (let i = 0; i < miArray.length; i++) {
//   miArray[i] = "El mismo nombre";
// }

// console.log(miArray);

//iterar un array con ForEach permite ejecutar una funcion por cada elemento del array

// miArray.forEach((item, index) => {
//   console.log(miArray[index]);
//   console.log(item);
// });

//MAP

//SIN MAP

// const newArray = [];

// miArray.forEach((item) => {
//   const newString = `Nombre: ${item}`;
//   console.log(newString);
//   newArray.push(newString);
// });

// console.log(newArray);

//CON MAP

// const newArrayWithMap = miArray.map((name) => `Nombre: ${name}`);

// console.log(newArrayWithMap);

// const newArrayWithMap = miArray.map((naame) => {
//   console.log(`Nombre:${naame}}`);
//   return `Nombre:${naame}`;
// });

// console.log(newArrayWithMap);

//FILTER

// const namesArray = [
//   "Alexis",
//   "Juan",
//   "Armando",
//   "Pedro",
//   "Marcelo",
//   "Luis",
//   "Armando",
//   "Alexis",
//   "Martina",
// ];

// const filteredArray = namesArray.filter((name) => name === "Alexis");

// console.log(filteredArray);

//FIND funcion por cada elemento condicion y devuelve

// const existingElement = namesArray.find(
//   (name) => name.toLowerCase() === "martina"
// );

// console.log(existingElement);

// if (existingElement) {
//   console.log("El nombre esta en la lista");
// } else {
//   console.log("El nombre no esta en la lista");
// }

//SORT

// const miArray = [
//   "Alexis",
//   "Juan",
//   "Pedro",
//   "Marcelo",
//   "Luis",
//   "Armando",
//   "Martina",
// ];

// const numbers = [10, 20, 30, 40];

// const orderedArray = miArray.sort();

// // console.log(orderedArray);

// console.log(orderedArray.reverse());

// const orderedArray = numbers.sort();
// // console.log(orderedArray);

// console.log(orderedArray.reverse());

//REDUCE
// const numbers = [10, 20, 30, 40];

//SIN REDUCE

// let total = 0;

// numbers.forEach((number) => (total += number));

// console.log(total);

//CON REDUCE

// const total = numbers.reduce((acumulador, valorActual) => {
//   console.log("Acumulador", acumulador);
//   console.log("Valor Actual", valorActual);
//   console.log("Aca termina la iteracion");
//   return acumulador + valorActual;
// }, 0);

//resolucion en una sola linea

// const total = numbers.reduce(
//   (acumulador, valorActual) => acumulador + valorActual,
//   0
// );

// console.log(total);

//EJERCICIOS DE ARRAY

// const List = [
//   "Lucas",
//   "Matias",
//   "Jose",
//   "Pedro",
//   "Martina",
//   "Marcelo",
//   "Esteban",
//   "Marcela",
//   "Martin",
// ];

// console.log(`La cantidad de invitados es de ${List.length}`); //CANTIDAD DE INVITADOS

// console.log(`El ultimo invitado de la fiesta es ${List[List.length - 1]}`);

// List.push("Pedro"); //a ultimo lugar se agrego a Pedro en la Fiesta
// console.log(List);

// const newList = List.filter((FirstName) => FirstName !== "Marcela"); //TODOS LOS INVITADOS MENOS MARCELA // funcion con cada uno de los elementos del array

// // console.log(newList);

// //NUMERO DE ORDEN conforme a la posicion del los datos/ nombres/

// // const ListWithOrderNumber = newList.map(
// //   (FirstName, index) => `${FirstName}. Orden:${index + 1}`
// // );

// // console.log(ListWithOrderNumber);

// //CONSUMO DE PLATOS TOTAL

// // const totalDishes = newList.reduce((acumulator, currentValue) => {
// //   if (currentValue === "Lucas") {
// //     return acumulator + 3;
// //   } else if (currentValue === "Esteban" || currentValue === "Jose") {
// //     return acumulator + 1;
// //   } else {
// //     return acumulator + 4;
// //   }
// // }, 0);

// // console.log(totalDishes);

// //ACOMODAR INVITADOS POR ORDEN ALFABETICO

// const OrderedNames = newList.sort();

// console.log(OrderedNames);
