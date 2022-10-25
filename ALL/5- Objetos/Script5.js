//OBJETOS
//{KEY:VALUE}
//QUE ALMACENAR Y VALOR

//{FirstName: "Matias"}

//DECLARAR UN OBJETO EN JS

// const literalObjet = {
//   FirstName: "Matias",
//   Job: "Developer",
//   "city-residence": "Buenos Aires",
// };

// // const normalObjet = new Object();
// literalObjet.favouriteColor = "Blue";

// console.log(literalObjet);
// console.log(literalObjet.Job);
// console.log(literalObjet["Job"]);
// console.log(literalObjet["city-residence"]);

// console.log(literalObjet.favouriteColor);

// literalObjet.favouriteColor = "Red";

// console.log(literalObjet.favouriteColor);

// console.log(normalObjet);

// CLASES DE OBJETOS EN JS
// LOS OBJETOS SON UN TIPO ESPECIAL DE FUNCION (ORIENTADOS A FUNCIONES)
// CLASES

//CLASE PERSONA
// 3 PROPIEDADES : FIRST NAME , CITY , JOB
// this dentro del scope sino no funca
//CREAR CLASE INSTANCIAR OBJETOS

// const firstName = "Jose";

// class Persona {
//   constructor(FirstName, city, Job) {
//     this.FirstName = FirstName;
//     this.Job = Job;
//     this.city = city;
//   }
//   saludar() {
//     console.log(`Hola, soy ${this.FirstName}`); //funciona como funcion pero es metodo jaja
//     //para llamarla nombre de funcion y matias.saludar()
//   }
// }

// // const persona1 = {
// //   FirstName: "Matias",
// //   Job: "Developer",
// //   city: "Buenos Aires",
// // };

// // const persona2 = {
// //   FirstName: "Juan",
// //   Job: "Arquitecto",
// //   city: "Cordoba",
// // };

// // const persona3 = {
// //   FirstName: "Martin",
// //   Job: "Abogado",
// //   city: "Rosario",
// // };

// const Matias = new Persona("Matias", "Buenos Aires", "Developer");
// const Juan = new Persona("Juan", "Cordoba", "Arquitecto");
// const Martin = new Persona("Martin", "Rosario", "Abogado");

// // console.log(Matias, Juan, Martin);
// Matias.saludar();
// Martin.saludar();

// Juan.saludar();

//CREACION DE CLASES HIJA

// EXTENDER UNA SUB CLASE DESDE UNA CLASE ORIGINAL

// class Animal {
//   constructor(name, isDomestic) {
//     this.name = name;
//     this.isDomestic = isDomestic;
//   }

//   speak() {
//     console.log(`${this.name} hace un ruido`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, isDomestic) {
//     super(name, isDomestic);

//     this.age = age;
//   }

//   speak() {
//     console.log(
//       `${this.name} ladra y ${
//         this.isDomestic ? "Es Domestico" : "Es callejero"
//       }`
//     );
//   }
//   sayAge() {
//     console.log(`${this.name} tiene ${this.age}`);
//   }
// }

// const dog = new Dog("Rulo", 5, true);

// // dog.sayAge();

// dog.speak();
// console.log(dog.name);

//TENGO UNA CLASE PUEDO CREAR SUCLASE EXTENDIENDO CLASE NUEVA CLASE PALABRA EXTENDS QUE TE PERMITE UTILIZAR Y MODIFICAR ESTA MISMA, Y PROPIEDADES Y METODOS
// CON SUPER TRAES EL CONSTRUCTOR PRIMERO ABAJO A TU  EXTENDIDA CLASE
//SABER SI ES DOMESTICO O  NO  PARA CUALQUIER TIPO DE ANIMAL LO AGREGAMOS EN CLASE ANIMAL Y LA PONEMOS EN EL CONSTRUCTOR Y TRAERLA CON EL SUPER
//LLAMAR A ELEMENTO CON SPEAK

//OBJET.KEY() , OBJET.VALUE(), OBJET.ASSING(), OBJET.ENTRIES

// const person = {
//   firstName: "Matias",
//   city: "Buenos Aires",
//   job: "Developer",
// };

//ACCEDER A UN ELEMENTO
// console.log(person.firstName)

//MODIFICAR ELEMENTO
// person.city = "Cordoba"
// console.log(person.city);

//OBJET KEYS

// const keys = Object.keys(person);

// person.forEach((element) => console.log(element)); // no se puede usar foreach para objets

// keys.forEach((key) => console.log(person[key])); //asi si

//alternative
//FOR IN PARA CADA ELEMENTO PERMITE POR CADA KEY DE NUESTRO OBJETO en este caso person

// for (const key in person) {
//   if (Object.hasOwnProperty.call(person, key)) {
//     console.log(person[key]);
//   }
// }

//OTRO METODO OBJET.VALUE //te devuelve arrray de la key

// const values = Object.values(person);

// console.log(values);

// OBJET.ASSING ASIGNA VALORES DE UN OBJETO A OTRO OBJETO//original pero se le agrega el skills
// si la propiedad ya existe la pisa ej "city"

// const developer = {
//   skills: "Javascript",
//   city: "Cordoba",
// };

// Object.assign(person, developer); //pasar propiedades de un objeto a otro

//otra forma de hacer modificaciones en la const

// const modifiedPerson = { ...person, ...developer };

// console.log(person);
// console.log(modifiedPerson);

//OBJET.ENTRIES devuelve arrays matrizess valores

// const entries = Object.entries(person);

// console.log(entries);

// EJERCICIO 1

// class Sports {
//   constructor(name, isTeamsSports) {
//     this.name = name;
//     this.isTeamsSports = isTeamsSports;
//   }
//   sayName() {
//     console.log(`El nombre del deporte es ${this.name}`);
//   }
//   sayIsTeamSport() {
//     const message = this.isTeamsSports
//       ? `${this.name} es un deporte de equipo`
//       : `${this.name} no es un deporte de equipos`;
//     console.log(message);
//     //   `${this.name} ${this.isTeamsSports ? "" : "no"} es un deporte de equipo`
//   }
// }

// class TeamSports extends Sports {
//   constructor(name, playersByTeam) {
//     super(name);
//     this.playersByTeam = playersByTeam;
//   }
//   sayPlayersByTeams() {
//     console.log(
//       `Para jugar al ${this.name} nesecitas ${this.playersByTeam} jugadores para el equipo`
//     );
//   }
// }

// const futbol = new TeamSports("Futbol", 11);
// futbol.sayName();
// futbol.sayPlayersByTeams();

// const tenis = new Sports("Tenis", false);
// tenis.sayName();
// tenis.sayIsTeamSport();

// const basket = new TeamSports("Basket", 5);

// basket.sayName();
// basket.sayPlayersByTeams();

//EJERCICIO 2

// const AndreaBag = {
//   cervezas: 2,
//   sandwiches: 2,
//   papasFritas: 1,
// };

// const MartinBag = { torta: 1, gaseosa: 1, galletitas: 1 };

// console.log(AndreaBag, MartinBag);

// const AndreaProducts = Object.keys(AndreaBag);
// const MartinProducts = Object.keys(MartinBag);

// console.log(AndreaProducts, MartinProducts);

// Object.assign(MartinBag, AndreaBag);

// console.log(MartinBag);

//USAR OBJET.KEYS

// const productsName = Object.keys(MartinBag);

// // // console.log(productsName);

// let totalProducts = 0;

// productsName.forEach((product) => (totalProducts += MartinBag[product]));

// console.log(totalProducts);

//USANDO FOR IN

// for (const key in MartinBag) {
//   if (Object.hasOwnProperty.call(MartinBag, key)) {
//     totalProducts += MartinBag[key];
//   }
// }
// console.log(totalProducts);

//OTRO METODO

// const productsQuantity = Object.values(MartinBag);

// console.log(productsQuantity);

// const totalProductsWithReduce = productsQuantity.reduce(
//   (acumulador, curretValue) => acumulador + curretValue,
//   0
// );

// console.log(totalProductsWithReduce);
