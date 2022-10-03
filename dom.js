console.log('Hola dom')
/*El DOM o document object model es un conjunto de utilidades especificamente diseñadas para manipular documentos html, este tranforma el documento html en un arbol de nodos jerarquico, facilmente manipulable*/
//Nodos mas importantes: document,element,atrr,text

//OBTENIENDO ELEMENTOS
//getElementById
const page = document.getElementById("page");
console.log(page)
const page2 = document.getElementById("page2");
console.log(page2)

//getElementsByClassName
const items = document.getElementsByClassName("item");
console.log(items)
console.log(items[0])
console.log(items.length)

//getElementsByName(name),getElementsByTagName(tag)
const nickname = document.getElementsByName("nickname");
console.log(nickname)
const divs = document.getElementsByTagName("div");
console.log(divs)
console.log(divs.length)

//querySelector(id/class/)
//al igual que getElementById() solo devuelve el primer elemento
const page3 = document.querySelector("#page");
console.log(page3)
const item2 = document.querySelector(".item")
console.log(item2)
const info = document.querySelector(".info");
console.log(info)

//querySelectorAll()
//similar a getElementsByClassName() devuelve un array con todos los elementos que encuentre
const infos = document.querySelectorAll(".info");
console.log(infos)
const nickname2 = document.querySelectorAll('[name="nickname"]');
console.log(nickname2)
const divs2 = document.querySelectorAll("div");
console.log(divs2)

//CREANDO ELEMENTOS
//createElement()
//podemos crear un elemento HTML en memoria y modificar su contenido para posteriormente insertarlo
const nuevoDiv = document.createElement("div");

//REEMPLAZANDO EL CONTENIDO
//.textContent devuelve el contenido de texto de un elemento
const nuevoDiv2 = document.querySelector("div")
nuevoDiv2.textContent = "Hola a todos";

//.innerHTML nos permite hacer lo mismo, pero interpretando el código HTML indicado renderizando sus elementos:
const divInfo = document.querySelector(".info");
divInfo.innerHTML = "<strong>Importante</strong>";

//INSERTANDO ELEMENTOS
//appendChild() inserta el elemento como un hijo al final
const img = document.createElement("img");
img.src = "pfp.jpg";
img.alt = "pfp waifu";
img.style = "width:50px; height:50px;"
document.body.appendChild(img);

const items4 = document.querySelectorAll(".item")
items4[0].textContent = "item";
items4[1].textContent = "item 2";

//insertAdjacent es bastante mas versatil ya que permiten muchas mas posibilidades
//.insertAdjacentElement() donde insertamos un objeto
//.insertAdjacentHTML() donde insertamos código HTML
//.insertAdjacentText() donde no insertamos elementos sino solo texto

//ELIMINANDO ELEMENTOS

const nuevoDivDelete = document.createElement("div")
nuevoDivDelete.innerHTML = "<b>Hola mundo</b>"
nuevoDivDelete.className = "delete"
document.body.appendChild(nuevoDivDelete)
const deleteMe = document.querySelector(".delete")
deleteMe.remove()

//EJERCICIOS DE USO DEL DOM
//EJERCICIO 1

const newElem = document.createElement('div')
newElem.id = 'nuevoElemento'
newElem.className = 'bloque'
newElem.style = 'background:red; width:100px; height:100px'
const body = document.querySelector("body")
body.appendChild(newElem)





