//CONTROL DE FLUJO
//IF/ELSE

// let age = 18;

// if (age >= 18) {
//   console.log(age >= 18);
//   console.log("Podes manejar");
// } else {
//   console.log(age >= 18);
//   console.log("No podes manejar");
// }

//ELSE IF

// let number = 10;

// if (number < 10) {
//   console.log("El numbero es menor a 10");
// } else if (number > 10) {
//   console.log("El numero es mayor a 10");
// } else if (number === 10) {
//   console.log("El numero es igual a 10");
// } else {
//   console.log("El valor ingresado no es un numero");
// }

//SWITCH

// const weather = "SOLEADO";

// switch (weather.toUpperCase) {
//   case "FRESCO":
//     console.log("Lleva Abrigo");
//     break;
//   case "LLUVIOSO":
//     console.log("Lleva Paraguas");
//     break;
//   case "SOLEADO":
//     console.log("Cuidate del Sol");
//     break;
//   default:
//     console.log("El tiempo esta bueno. difruta del dia");
//     break;
// }


// let x=1;

// console.log(x);
// x=2
// console.log(x);
// x=3
// console.log(4);
// x=4
// console.log(5);
// x=5

//FOR

// for (let i = 0; i <= 5; i++) {
//   console.log(i);

// } //i+1 es igual que i++

// let ouput = "";

// for (let i = 1; i <= 5; i++) {
//   ouput = ouput + "#";

//   console.log(ouput);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) console.log("${i} es par");
//   //ACA VAN LAS COMAS TEMPLA3 LAS QUE SON ASI ´
//   else console.log("${i} es impar");
// }
// Multiplos de 3 y 5
// for (let i = 1; i <= 15; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// for (let i = 1; i <= 15; i++) {
//   let text = "";

//   if (i % 3 === 0) {
//     text += "Fizz";
//   }
//   if (i % 5 === 0) {
//     text += "Buzz";
//   } else if (i % 3 !== 0 && i % 5 !== 0) {
//     text = i;
//   }
//   console.log(text);
// }

//WHILE

// let number = 1;

// do {
//   console.log("con do while", number);
//   number++;
// } while (number < 1);

// number = 1;

// while (number < 1) {
//   console.log("con while", number);
//   number++;
// }

// const firstName = prompt("ingresa el nombre");

// const firstNumber = prompt("ingresa un numero");
// const secondNumber = prompt("ingresa otro numero");

// console.log(typeof firstNumber);

// const Width = prompt("ingresa el ancho");
// const Height = prompt("ingresa el alto");

// const result = Width * Height;

// alert("la superficie de tu habitacion es ${result}");

// const firstName = prompt("ingresa el nombre");

// let isRegistered, registerUserName, registerPassword;

// const wishesToRegister = confirm(
//   "Bienvenido al sitio. Haz click en OK para registrarte"
// );

// do {
//   if (wishesToRegister) {
//     if (!registerUserName) {
//       registerUserName = prompt("ingresa tu nombre de usuario");
//     }

//     if (registerUserName.length >= 3) {
//       registerUserName = registerUserName.toLowerCase();

//       registerPassword = prompt("Ingresa tu password");
//       if (registerPassword.length >= 6) {
//         alert("El registro se completo exitosamente");
//         isRegistered = true;
//       } else {
//         alert("El password tiene que tener por lo menos 6 caracteres");
//         registerPassword = null;
//       }
//     } else {
//       alert("El nombre de usuario tiene que tener por lo menos 3 caracteres");
//     }
//   } else {
//     alert("OK, te esperamos cuando gustes");
//   }
// } while (wishesToRegister && (!registerPassword || !registerUserName));

// console.log(registerUserName, registerPassword);

// let loginPassword, loginUserName;

// if (isRegistered) {
//   let wishesToLogin = confirm("Haz click en OK para iniciar sesion");

//   do {
//     if (wishesToLogin) {
//       loginUserName = prompt("Ingresa tu usuario");

//       if (loginUserName !== null) {
//         loginUserName = loginUserName.toLowerCase();
//         loginPassword = prompt("Ingresa tu password");
//         if (loginPassword === null) {
//           wishesToLogin === false;
//         } else if (
//           loginUserName === registerUserName &&
//           loginPassword === registerPassword
//         ) {
//           alert("Login Exitoso!");
//         } else {
//           alert("Alguno de los datos ingresados es incorrecto");
//           loginPassword = null;
//           loginUserName = null;
//         }
//       } else {
//         wishesToLogin = false;
//       }
//     } else {
//       alert("Vuelve cuando gustes");
//     }
//   } while (wishesToLogin && (!loginUserName || !loginPassword));
// }
