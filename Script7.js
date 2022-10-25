// DOM (DOCUMENT OBJET MODEL
// LIVE DOM VIEWER =>

//ESTRUCTURA DE OBJETOS O NODOS
// CUANDO CARGAMOS UN HTML
// CADA ELEMENTOS DE ESTA ESTRUCTURA SON LOS CONTENIDOS DE LA PAGINA WEB (LOS OBJETOS O NODOS)

//ACCESO A LOS NODOS
//POR EL NOMBRE DE LA ETIQUETA
// ID IMG UTILIZAR ID AVATAR PARA ACCEDER A ESTE NODO

//ACCEDER A UN NODO

//1) por el tag name

// const header = document.getElementsByTagName("header");

// console.log(header);

// //2) por el nombre de la clase

// const container = document.getElementsByClassName("container"); //todos los elementos que encuentre

// console.log(container);

// //3) por el ID

// const avatar = document.getElementById("avatar"); //solo un elemento o ID

// console.log(avatar);

//4) QUERYS SELECTOR
//por arriba de las otras 3 es el mejor

// const main = document.querySelector("main");

// console.log(main);

// // const username = document.querySelector(".username");
// // console.log(username);

// const repos = document.querySelector("#repos");

// console.log(repos);

// //5) QUERY SELECTOR ALL

// // const username = document.querySelectorAll(".username");

// // console.log(username);

// //ACCEDER Y MODIFICAR TEXTO (TEXT CONTENT O INNER TEXT)

const username = document.querySelector(".username");

// username.textContent = "Matias";

username.innerText = "Matias";

// //ACCEDER Y MODIFICAR SRC DE LA IMAGEN

const avatar = document.querySelector("#avatar");

avatar.src = "https://i.pravatar.cc/300";

// // console.log(avatar);

// //AGREGAR CONTENIDO HTML DENTRO DE NUESTROS NODOS EXISTENTES
// //INCORPORAR HTML MEDIANTE JS

const list = document.querySelector("#repos-list");

list.innerHTML = `<li> Otro Repo </li>
 <li> <strong> Super Repo</strong> </li>`;

// console.log(list.outerHTML); // todo lo puesto   en el li
// console.log(list.innerHTML); // lo que esta adentro del li

//MODIFICAR ESTILOS

//CLASS NAME

// const container = document.querySelector(".container");

// console.log(container.className);

// container.className = "background-blue";
// console.log(container.className);

//CLASS LIST

// console.log(container.classList);
// container.classList.add("background-black");

// //
// container.classList.remove("backgruond-black");

// console.log(textNodes);
// const switchTheme = () => {
//   //   textNodes.forEach((element) => element.classList.toggle(".white-text"));
//   const textNodes = document.querySelectorAll(".text");
//   container.classList.toggle("background-white");
//   const textNodes = document.querySelectorAll("text");
//const avatar =document.querySelector("#avatar");
//console.log(avatar.style);
//avatar.style.border ="2px solid red"

// };
// switchTheme();

// const container = document.querySelector(".container");

// console.log(container);

// const switchTheme = () => {
//   const textNodes = document.querySelectorAll(".text");
//   const container = document.querySelector(".container");
//   const avatar = document.querySelector("#avatar");

//   console.log(container.classList);

//   container.classList.toggle("background-black");
//   textNodes.forEach((element) => element.classList.toggle("whitetext"));
//   if (container.classList.contains("background-black")) {
//     avatar.style.border = "2px solid white";
//   }
// };

// switchTheme();

// //switchTheme

// //ELIMINAR UN NODO
// //REMOVE()

// const repos = document.querySelector("#repos");

// repos.remove();

// //CREAR NODO

// //document.createElement

// const reposNode = document.createElement("h2");
// reposNode.textContent = "Repos";
// reposNode.classList.add("text", "whitetext");

// console.log(reposNode);
// //appendChild
// // const parentAsaid = document.querySelector("aside");

// // parentAsaid.appendChild(reposNode);

// //appendChild

// //BEFORE and AFTER

// const reposList = document.querySelector("#repos-list");

// reposList.before(reposNode);
// // reposList.after(reposNode);

// switchTheme();
// // switchTheme();

//LINK DE PROPIEDADES Y METODOS  de elementos=>https://developer.mozilla.org/es/docs/Web/API/Element
//LINK PROPIEDADES Y METODOS DOCUMENT =>https://developer.mozilla.org/es/docs/Web/API/Document

//EJERCICIOS

// const baseUrl = "https://api.github.com";

// const getPublicRepositories = async () => {
//   const response = await fetch(`${baseUrl}/repositories`);
//   const jsonResponse = await response.json();
//   console.log(jsonResponse[0]);
//   return jsonResponse[0];
// };
// const getPublicRepositoriesFromOwner = async (reposEndPoint) => {
//   const reposResponse = await fetch(reposEndPoint);
//   const jsonReposResponse = await reposResponse.json();
//   const responseRepos = jsonReposResponse.slice(0, 5);
//   return responseRepos;
//   console.log(responseRepos);
// };

// const editProfile = async () => {
//   const profileData = await getPublicRepositories();
//   const avatarUrl = profileData.owner.avatar_url;
//   const name = profileData.owner.login;
//   const userRepos = await getPublicRepositoriesFromOwner(
//     profileData.owner.repos_url
//   );

//   const nameNode = document.querySelector("h2");
//   const userAvatar = document.querySelector("#avatar");

//   nameNode.textContent = name;
//   userAvatar.src = avatarUrl;

//   userRepos.forEach((repo) => {
//     const repoNode = document.createElement("a");
//     const listNode = document.querySelector("#repos-list");

//     repoNode.textContent = repo.html_url;
//     repoNode.href = repo.html_url;

//     listNode.appendChild(repoNode);
//   });

//   console.log(userRepos);
// };

// editProfile();

console.log("Hola Mundo desde la consola");
