//FUNCIONES

//DECLARACION DE LA FUNCION

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

//INVOCAR LA FUNCION (LLAMAR LA FUNCION)

// sum(2, 3);
// sum(4, 3);
// sum(5, 5);

//RETURN

// function sayHello() {
//   return "Hola Mundo";
// }

// console.log(sayHello());

//FUNCIONES

//DECLARACION DE LA FUNCION

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

//INVOCAR LA FUNCION (LLAMAR LA FUNCION)

// sum(2, 3);
// sum(4, 3);
// sum(5, 5);

//RETURN / ESTRUCTURA DE FUNCION / FORMA DE DECLARACION

// function sayHello() {
//   return "Hola Mundo";
// }

// console.log(sayHello());

// function sum(num1, num2) {
//   //   console.log(num1 + num2);
//   return num1 + num2;
// }

// function sum(num1, num2) {
//   return num1 + num2;
// }

// const result = sum(2, 3);

// const result = function (num1, num2) {
//   return num1 + num2;
// };

// const result = (num1, num2) => {
//   return num1 + num2;
// };

// const result = (num1, num2) => num1 + num2;

// console.log(result(2, 3) + 5);

// console.log(result(2, 2) + 20);

// SCOPE

// let isValid = false;

// function validatePermission(role) {
//   let validRole = "admin";
//   let isValid = true;

//   if (role === validRole) {
//     let isValid = true;
//     console.log("Dentro de if", isValid);
//   } else {
//     let isValid = false;
//     console.log("Dentro del else", isValid);
//   }
//   console.log("Dentro de la funcion", isValid);
// }
// validatePermission("any");
// console.log("A nivel global", isValid);

//HOISTING

// console.log(year);
// console.log(color);
// console.log(firstName);

// console.log(sayHelllo());
// console.log(sayGoodBye);
// console.log(sum);
// console.log(sum(2, 3));

// console.log(sum(12, 3));

// console.log(year);
// const result = sum(year,10);
// console.log(result+20);

// console.log(sum(year, 10));

// var year = 2021;
// let color = "red";
// const firstName = "Matias";

// function sayHelllo() {
//   return "Hola Mundo";
// }

// const sayGoodBye = function () {
//   return "Bye Bye";
// };

// // const sum = (num1, num2) => num1 + num2;

// function sum(num1, num2) {
//   return num1 + num2;
// }

// // // console.log(color, firstName, year);

//NUMEROS PRIMOS / CONVERSION DE TEMPERATURA / TOTAL DE UNA COMPRA

// const findNumerType = (number) => {
//   let message = "";
//   const parsedNumber = +number;

//   if (!parsedNumber && parsedNumber !== 0) {
//     message = "El valor ingresado no es un numero";
//     return message;
//   }

//   if (parsedNumber === 0) {
//     message = "El numero ingresado es 0";
//   } else if (parsedNumber > 0) {
//     message = "El numero ingresado de positivo";
//   } else {
//     message = "El numero ingresado es negativo";
//   }
//   return message;
// };

// const choseNumber = prompt("Ingresa un numero");

// const response = findNumerType(choseNumber);

// alert(response);

// const isPrime = (number) => {
//   const parsedNumber = +number;

//   if (!parsedNumber && parsedNumber !== 0) {
//     alert("El valor ingresado no es un numero");
//     return;
//   }

//   if (parsedNumber < 2) return false;

//   for (let i = 2; i < parsedNumber; i++) {
//     if (parsedNumber % i === 0) return false;
//   }
//   return true;
// };

// const chosenNumber = prompt("Ingresa un numero");

// const isNumberPrime = isPrime(chosenNumber);

// if (isNumberPrime !== undefined) {
//   if (isNumberPrime) alert("El numero es Primo");
//   else alert("El numero no es Primo");
// }

// C a F (C x 9/5 ) +32
// F a C (F -32 ) x 5/9

// const convertTemperature = (temperature, target) => {
//   const parsedTemp = +temperature;
//   const parsedTarget = target.toLowerCase();

//   if (!parsedTemp && parsedTemp !== 0) {
//     alert("El valor ingresado no es valido");
//     return;
//   }

//   if (parsedTarget === "celsius") {
//     return ((parsedTemp - 32) * 5) / 9;
//   } else if (parsedTarget === "faranheit") {
//     return (parsedTemp * 9) / 5 + 32;
//   } else {
//     alert("El formato ingresado no es valido");
//     return;
//   }
// };

// const temperature = prompt("Ingresa la temperatura");

// const target = prompt("Ingresa a que unidad de medida la queres convertir");

// const response = convertTemperature(temperature, target);

// if (response !== undefined) {
//   alert(`La temperatura en ${target.toLocaleLowerCase} es ${response}`);
// }

// const calculateTotal = () => {
//   let total = 0;
//   let subTotal;

//   do {
//     subTotal = prompt("Ingresa el valor del producto");
//     const parsedSubtotal = +subTotal;
//     if (parsedSubtotal) {
//       total += parsedSubtotal;
//     } else {
//       if (subTotal.toLocaleLowerCase() !== "total")
//         alert("El valor ingresado no es correcto");
//     }
//   } while (subTotal.toLowerCase() !== "total");

//   return total;
// };

// const response = calculateTotal();

// alert(response);

// TRUTHY Y FALSY
//FALSY : 0,NULL, UNDIFINED , NAN, '', "", FALSE
//Truthy :

// Boolean("hola");
// !!"Hola";

// console.log(Boolean(false));

// console.log(Boolean(null));

// console.log(Boolean(!!0));
// console.log(Boolean(!!""));

// console.log(Boolean("Hola Mundo"));

// console.log(Boolean(40));

// console.log(!![]);

// const firstName = prompt("Ingresa tu nombre");

// if (firstName !== null && firstName.length > 0) {
// }

// console.log(firstName);

// MAS FACIL ESTO

// const firstName = prompt("Ingresa tu nombre");

// if (+firstName) {
//   console.log("esto es truthy", firstName);
// } else {
//   console.log("esto es falsy,", +firstName);
// }
