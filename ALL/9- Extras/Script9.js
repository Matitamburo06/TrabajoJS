//DESTRUCTURING

//acceder y cambiar ARRAYS

// const names1 = ["Alexis", "Juan", "Pedro"];
// const names2 = ["Martin", "Javier", "Matias"];

// const person1 = {
//   firstname: "Juan",
//   job: "Contador",
//   city: "Cordoba",
// };
//SIN DESTRUCTURING
// const user1 = names1[0];
// const user2 = names1[1];
// const user3 = names1[2];

// console.log(user1, user2, user3);

//CON DESTRUCTURING

// const [user1, user2, user3] = names1;
// console.log(user1, user2, user3);

//OBJETOS
//SIN DESTRUCTURING
// const user1 = person1.firstname;
// const job = person1.job;
// console.log(user1, job);

//CON DESTRUCTURING

// const { firstname, job } = person1;
// console.log(firstname, job);

// const { firstname: user1, job } = person1;
// console.log(user1, job);

//SPREAD OPERATOR  (...)
// const names1 = ["Alexis", "Juan", "Pedro"];
// const names2 = ["Martin", "Javier", "Matias"];

// const person1 = {
//   firstname: "Juan",
//   job: "Contador",
//   city: "Cordoba",
// };

//EN ARRAYS
//1) concatenar arrays (concat)

// const mergedArray = [...names1, ...names2];

// console.log(mergedArray);

//2) copia de array
// const copiedArray = [...names1];

// names1.push("Marcelo");
// copiedArray.push("Marcelo");

// console.log(names1);
// console.log(copiedArray);

//3) obtener elementos del Array

// const [user1, user2, user3] = names1;

// const groupedUsers = [user2, user3];

// console.log(user1, user2, user3);
// console.log(names1);
// console.log(groupedUsers);

// const [user1, ...groupedUsers] = names1;

// console.log(user1);
// console.log(groupedUsers);
// console.log(names1);

// EN FUNCIONES

// const logValues = (value1, value2, value3) => {
//   const values = [value1, value2, value3];

//   values.forEach((value) => console.log(value));
// };

// const logValues = (value1, ...args) => {
//   console.log("Soy el value 1 =>", value1);
//   args.forEach((value) => console.log(value));
// };

// logValues("Hola", "Chau", "Como estas?", "No aparezco", "Otro mas");

//EN OBJETOS

//1) COPIAR OBJETOS
// const copiedPerson = { ...person1 };

// copiedPerson.city = "Rosario";
// console.log(copiedPerson);

// console.log(person1);

//2) MERGEAR OBJETOS ( vs  objet.assign()) MODIFICAR Y AGREGAR OBJETS

// const mergedObject = { ...person1, city: "Rosario" };
// console.log(mergedObject);
// console.log(person1);

// const updatedData = {
//   city: "Rosario",
//   age: 30,
// };
// const mergedObject = { ...person1, ...updatedData };

// console.log(mergedObject);

//PROGRAMACION FUNCIONAL

// const getfirstname = () => "Alexis";

// console.log(getfirstname());

// const gettwoNumber = () => 2;

// console.log(gettwoNumber() + 3);

//INMUTABILIDAD

// const names1 = ["Alexis", "Juan", "Pedro"];
// const names2 = ["Martin", "Javier", "Matias"];

// const person1 = {
//   firstname: "Juan",
//   job: "Contador",
//   city: "Cordoba",
// };

// // const addMember = (newMember) => {
// //   names1.push(newMember);
// // };

// // addMember("Marcelo");
// // console.log(names1);

// const addMember = (currentMembers, newMember) => {
//   const newMemberList = [...currentMembers, newMember];
//   return newMemberList;
// };
// console.log(addMember(names1, "Marcelo"));

// console.log(names1);
//FUNCIONES PURAS

// const getRandomNumber = () => Math.Random();

// // const sum = (a, b) => a + b + getRandomNumber(); //nopura

// const sum = (a, b) => a + b;
// console.log(sum(2, 3));
// console.log(sum(2, 3));
// console.log(sum(2, 3));
// console.log(sum(2, 3));
// console.log(sum(2, 3));

//HIGH ORDER FUNCTIONS

// const logResult = (result) => console.log(result);
// const alertResult = (result) => alert(result);
// logResult("Hola");

// const sum = (a, b, callback) => callback(a + b);
// sum(2, 3, logResult);
// sum(3, 3, alertResult);

// const names2 = ["Martin", "Javier", "Matias"];

// names2.map(logResult);

// names2.forEach(logResult);
