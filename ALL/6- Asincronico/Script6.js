//ASINCRONISMO
// EN JS

//COMO FUNCIONA JS YA QUE NO ES UN LENGUAJE ASINCRONICO , COMO MANEJAMOS TAREAS ASINCRONICAS

// console.log("Primero");
// for (let index = 0; index < 100; index++) {
//   console.log(index);
// }

// console.log("despues del for");

// console.log("Me despierto");
// console.log("Me lavo la cara");
// console.log("Pongo la cafetera ");
// for (let time = 120; time >= 0; time--) {
//   console.log(time);

//   if (time === 0) console.log("El cafe esta listo"); //ESTO NO ESTA BIEN (SET TIME OUT PARA ESTAS COSAS)
// }
// console.log("Preparo el cafe");
// console.log("Desayuno");
// console.log("Me siento a trabajar");

//SET TIMEOUT()

// console.log("Me despierto");
// console.log("Me lavo la cara");
// console.log("Pongo la cafetera ");
// setTimeout(() => {
//   console.log("El cafe esta listo"); //tarea que dura 5 seg para ejecutar  y aunque dure 0 segundos va a estar despues de cualquier met
// }, 5000);
// console.log("Me siento a trabajar");

//CALL STACK

// console.log("hola");

// setTimeout(function timeout() {
//   console.log("River Campeon");
// }, 5000);

// console.log("Bienvenido");

//EJEMPLO 1

// console.log("Mario");
// console.log("Juan");
// console.log("Pedro");

//EJEMPLO 2

// setTimeout(() => console.log("Mario"), 1000);

// console.log("Juan");
// console.log("Pedro");

//EJEMPLO 3

// setTimeout(() => console.log("Mario"), 0);
// console.log("Juan");
// console.log("Pedro");

//EJEMPLO 4

// setTimeout(() => console.log("Mario"), 0);

// for (let index = 0; index <= 5000; index++) {
//   console.log(index);
//   if (index === 5000) console.log("Juan");
// }
// console.log("Pedro");

//PROMESAS

// function pagarConTarjeta(precio) {
//   const limite = 10000;
//   for (let index = 0; index < 5000; index++) {
//     console.log("Conectando...");
//   }
//   if (precio < limite) console.log("Compra Aprobada");
//   else console.log("Compra Rechazada");
// }
// console.log(pagarConTarjeta(1000));

//Respuestas de la Promesa =>!

// function pagarConTarjeta(precio) {
//   const limite = 10000;
//   console.log("Conectando...");

//   setTimeout(() => {
//     if (precio < limite) console.log("Compra Aprobada");
//     else console.log("Compra Rechazada");
//   }, 2000);
// }
// console.log(pagarConTarjeta(1000));

//3 ESTADOS: PENDIENTE, RESUELTA , RECHAZADA

// const pagarConTarjeta = (precio, isConected) =>
//   new Promise((resolve, reject) => {
//     if (!isConected) return;
//     const limite = 10000;
//     if (precio < limite) resolve("Compra Aprobada");
//     else reject("Compra Rechazada");
//   });

// console.log(pagarConTarjeta(10000, true));
// console.log(pagarConTarjeta(10000, false));

// const pagarConTarjeta = (precio, isConected) =>
//   new Promise((resolve, reject) => {
//     if (!isConected) return;
//     console.log("Procesando el Pago");
//     const limite = 10000;
//     setTimeout(() => {
//       if (precio <= limite) resolve("Compra Aprobada");
//       else reject("Compra Rechazada");
//     }, 3000);
//   });

// console.log(
//   pagarConTarjeta(100000, true)
//     .then((respuesta) => {
//       console.log(respuesta);
//     })
//     .catch((error) => console.log(error))
// );

// console.log("Otra Tarea");
//promise (resolve , reject)
//el conosole log de la promesa .then () y para reparar el erorr .catch

// const pagarConTarjeta = (precio, isConected) =>
//   new Promise((resolve, reject) => {
//     const limite = 10000;
//     console.log("Procesando el Pago");

//     if (!isConected) return;

//     setTimeout(() => {
//       if (precio <= limite) resolve("Compra Aprobada");
//       else reject("Compra Rechazada");
//     }, 3000);
//   });

// console.log(
//   pagarConTarjeta(100000, true)
//     .then((respuesta) => {
//       console.log(respuesta);
//     })
//     .catch((error) => console.log(error))
// );

// console.log("Otra Tarea");
// console.log("Otra Tarea");
// console.log("Otra Tarea");
// console.log("Otra Tarea");
// console.log("Otra Tarea");

//ASYNC-AWAIT

// const pagarConTarjeta = (precio, isConected) =>
//   new Promise((resolve, reject) => {
//     const limite = 10000;
//     console.log("Procesando el Pago");
//     if (!isConected) return;
//     setTimeout(() => {
//       if (precio <= limite) resolve("Compra Aprobada");
//       else reject("Compra Rechazada");
//     }, 3000);
//   });
// async function procesarPago() {
//   const respuesta = await pagarConTarjeta(100, true);

//   console.log(respuesta);
// }
// procesarPago();

// const pagarConTarjeta = (precio, isConected) =>
//   new Promise((resolve, reject) => {
//     const limite = 10000;
//     console.log("Procesando el Pago");
//     if (!isConected) return;
//     setTimeout(() => {
//       if (precio <= limite) resolve("Compra Aprobada");
//       else reject("Compra Rechazada");
//     }, 3000);
//   });
// async function procesarPago() {
//   try {
//     const respuesta = await pagarConTarjeta(100000, true); //SI ESTO ES FALSE QUEDA EN EL RETURN POR QUE CON RETURN MATAS LA EJECUCION DE LA FUNCION

//     console.log(respuesta);
//   } catch (error) {
//     console.log(error);
//   }
// }

// procesarPago();

//CON ARROW FUNCTION ASYNC ANTES DE LOS PARENTESIS EN VEZ DE PRIMERO USAMOS TRY CATCH NOS DEVUELVE PROMESA

// O HACER FUNCION DE PROCESAR PAGO(S) CUANDO ESTEN TODAS RESUELTAS "TIRA TODAS RESUELTAS "
//
// const pagarConTarjeta = (precio, isConected) =>
//   new Promise((resolve, reject) => {
//     const limite = 10000;
//     console.log("Procesando el Pago");
//     if (!isConected) return;
//     setTimeout(() => {
//       if (precio <= limite) resolve("Compra Aprobada");
//       else reject("Compra Rechazada");
//     }, 3000);
//   });
// const procesarPago = async () => {
//   try {
//     const respuesta = await pagarConTarjeta(1000, true); //SI ESTO ES FALSE QUEDA EN EL RETURN POR QUE CON RETURN MATAS LA EJECUCION DE LA FUNCION

//     console.log(respuesta);
//   } catch (error) {
//     console.log(error);
//   }
// };

// // procesarPago();

// const allPromises = [
//   pagarConTarjeta(100, true),
//   pagarConTarjeta(100, true),
//   pagarConTarjeta(50, true),
// ];

// //metodo de js para esperar varias promesas

// // Promise.all(allPromises);

// const procesarPagos = async () => {
//   try {
//     const respuesta = await Promise.all(allPromises);

//     console.log(respuesta);
//     return "Todas Resueltas";
//   } catch (error) {
//     console.log(error);
//   }
// };

// // console.log(procesarPagos());
// console.log(procesarPagos().then((response) => console.log(response)));

//FETCH

//BUSCAR DATA FUERA DE NUESTRO CODIGO
//BUSCAR RECURSOS FUERA DEL CODE
// CASO HABITUAL DATA DE USUARIOS DE UNA BASE DE DATOS IPA EN OTRA BASE DE DATOS
//BUSCAR ESA DATA DE FORMA ASINCRONICA
//FUNCIONALIDAD DE JS

//FETCH

// const getDataFromApi = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log(await response.json());
// };

// getDataFromApi();
//esto esta bien

//ejemplo con error

// const getDataFromApi = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const jsonResponse = await response.json();
//     // console.log(jsonResponse);
//     return jsonResponse;
//   } catch (error) {
//     console.log("error=>", error);
//   }
// };

// //getDataFromApi();

// console.log(getDataFromApi().then((response) => console.log(response)));

//ASINCRONISMO Y CALL STACK - ROUND 2

//EJEMPLO 1

// const asyncOperation = new Promise((resolve) => resolve());

// asyncOperation.then((resolvedValue) => console.log("Mario"));
// console.log("Juan");
// console.log("Pedro");

//EJEMPLO 2

// const asyncOperation = fetch("https://jsonplaceholder.typicode.com/todos/1");
// asyncOperation.then((resolvedValue) => console.log("Mario"));
// console.log("Juan");
// console.log("Pedro");

//EJEMPLO 3

// async function fetchSomething() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Mario");
//       resolve();
//     }, 10);
//   });
//   console.log("Juan");
// }

// fetchSomething();
// console.log("Pedro"); // Pedro esta en primer lugar por el code sincronico que esta afuera de la funcion async function

//EJEMPLO 4

// setTimeout(() => console.log("Mario"), 5);

// const promise = new Promise((resolve) => {
//   setTimeout(() => resolve(), 10);
// });

// promise.then(() => console.log("Juan"));

// console.log("Pedro");

//EJEMPLO 5

// setTimeout(() => console.log("Mario"), 0);

// const promise = Promise.resolve();

// promise.then(() => console.log("Juan"));

// console.log("Pedro"); //PRIORIDAD SIEMPRE EL CONSOLE LOG POR CODE SINCRONICO

//EJERCICIOS

//1

// console.log("Juan");
// console.log("Mario");
// console.log("Martin");

//CARRERA DE JUAN MARIO Y MARTIN CON SET TIME OUT
//VUELTA 1 MARIO MARTIN JUAN // VUELTA 2 JUAN MARTIN MARIO //VUELTA 3 MARTIN JUAN MARIO //VUELTA 4 MARIO JUAN MARTIN

//VUELTA 1

// setTimeout(() => console.log("Juan"), 10);

// console.log("Mario");
// console.log("Martin");

//VUELTA 2

// console.log("Juan");
// setTimeout(() => console.log("Mario"), 0);

// console.log("Martin");

//VUELTA 3// TRES  MANERAS PARA RESOLVERLO
//manera 1
// setTimeout(() => console.log("Juan"), 10);
// setTimeout(() => console.log("Mario"), 15);

// console.log("Martin");
//manera 2
// setTimeout(() => {
//   console.log("Juan");
//   setTimeout(() => console.log("Mario"), 0);
// }, 0);

// console.log("Martin");
//manera 3
// setTimeout(() => {
//   console.log("Juan");
//   console.log("Mario");
// }, 0);

// console.log("Martin");

//VUELTA 4

// setTimeout(() => console.log("Juan"), 10);

// console.log("Mario");
// setTimeout(() => console.log("Martin"), 15);

//EJERCICIO 2

// const temporizador = (second) => {
//   setTimeout(() => {
//     if (second < 0) return;

//     console.log(second);

//     temporizador(second - 1);
//   }, 1000);
// };
// temporizador(10);

//EJERCICIO 3

//fetch request api ei pi ai

// const baseUrl = "https://api.github.com";

// const getPublicRepositories = async () => {
//   const response = await fetch(`${baseUrl}/repositories`);
//   const jsonResponse = await response.json();
//   //   console.log(jsonResponse);
//   return jsonResponse;
// };
// getPublicRepositories();

//respuesta retorno de arrays de los nombres de usuario de los owners de los repositorios listados

// const getOwnersNames = async () => {
//   const repositories = await getPublicRepositories();

//   const namesArray = repositories.map((repo) => repo.owner.login);

//   console.log(namesArray);
// };
// getOwnersNames();

//cheto maaal

//respuesta al primer repositorio y listar todos los repo del owner
// sobre la base construimos el fetch para los repositorios publicos
//sobre el listado hicimos .map para iterar en cada repositorios llamamos a repo.owner
// listados de repositorios accedemos al repositorio que queremos (0,1,2,3,etc)
// seguimos repos endpoint recibimos la data parceamos a json y se traduce en el listado de repositorios
//que buscabamos

// const getPublicRepositoriesFromOwner = async () => {
//   const repositories = await getPublicRepositories();
//   const firstRepository = repositories[0];

//   const reposEndPoint = firstRepository.owner.repos_url;

//   const reposResponse = await fetch(reposEndPoint);
//   const jsonReposResponse = await reposResponse.json();

//   console.log(jsonReposResponse);
// };
// getPublicRepositoriesFromOwner();

//JSON FORMATO COMO MANEJAR JSON

//PATCH => ACTUALIZA PARCIALMENTE EL RECURSO

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// method:"PATCH",

// body: JSON.stringify({
//     title:"Foo"
// }),
// headers: {
//     "Content-type": "application/json";charset=UTF-8',
// }
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//JSON
//METODOS

// const body = {
//   id: 1,
//   title: "foo",
//   body: "bar",
//   userId: 1,
// };

// console.log(typeof body);

// convertir este objeto de js a json

//Json es un formato de texto que es completamente independiente del lenguaje pero utiliza
//convenciones que son ampliamente conocidos por la familia de lenguajes C

// const parsedBody = JSON.stringify(body);

// console.log(body);
// console.log(parsedBody);

// //convertir json a js

// const bodyToJavascript = JSON.parse(parsedBody);

// console.log(bodyToJavascript);

//PROTOCOLO HTTP
//COMO SE UTILIZA
// NAVEGANDO , DE ALGUNA FORMA ESA PAGINA APAREZCA EN NUESTRO NAVEGADOR
//CLIENTE VA A BUSCAR A UN SERVIDOR TODA LA INFO PARA RENDERISAR NUESTRA PAG
//CLIENTE Y SERVIDOR (ALMACENADA LA INFO)
//LENGUAJE DE COMUNICACION ENTRE LOS 2
// PROTOCOLO HTTP QUE PERMITE COMPARTIR INFO ENTRE PCS

//INTERACCION CON LOS SERVIDORES
// 2 PARTES CLIENTE Y EL SERVIDOR

//METODOS
//GET AND POST
//4 metodos
// PUT AND DELETE

//GET = SOLICITAR DATOS O INFORMACION AL SERVIDOR
//POST = ENVIAR INFO AL SERVIDOR
//PUT = MODIFICAR INFO EN EL SERVIDOR
//DELETE = BORRAR INFORMACION DEL SERVIDOR

// GET

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json()) //PARCEADA A JSON
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//PARA EL JSON EL GET ES EL DEFOULT

// POST
//end point data de la api https//jsonplaceholder....etc

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     //mandar la info del recurso que queremos crear //jsonstringfy convierte un objeto js en un valor json value
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     //donde se envia un tipo de info especifica
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//PUT AND DELETE

//PUT

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     id: 1,
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//PATCH BUSCA EL RECURSO NUMERO 1 Y VA ACTUALIZAR EL TITULO

//PATCH ACTUALIZA PARCIALMENTE EL RECURSO

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   body: JSON.stringify({
//     title: "foo",
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//DELETE

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// });
