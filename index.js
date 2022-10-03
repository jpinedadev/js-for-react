//FUNCIONES
//FUNCION POR DECLARACION
function saludar() {
  return "Hola funcion declarativa";
}
console.log(saludar()); // 'Hola'

//Desarrollar un programa que ejecute una
//funcion declarativa y dentro sume
//2 numeros pasados por parametro
let a = 2;
let b = 4;
let c = 8;
let r = 10;
let pi = 3.1416;

function suma(a=1,b=1) {
  return a+b;
}

console.log('La suma es: '+suma(b))

/*Desarrollar un programa en js que permita
saber el area de un cuadrado
*/

function area(a) {
  return a*a;
}

console.log('El area es: '+area(a));

//FUNCIONES POR EXPRESION
//Se guardan en variables

// El segundo "saludar" 
//(nombre de la función) se suele omitir: 
//es redundante
const saludo = function saludar() {
  return "Hola funcion por expresion";
};
console.log(saludo()); // 'Hola'

/*Desarrollar un programa que ejecute una
funcion por expresion que calcule una resta
*/
const resta = function resta(b,a) {
  return b-a;
}

console.log('La resta es: '+resta(b,a))

//Area de un rectangulo b*h
const areaRectangulo = function area(b,h) {
  return b*h;
}
console.log('Area de un rectangulo: '+areaRectangulo(b,a))

//FUNCIONES ANONIMAS
/* se declaran sin nombre de función y se alojan 
en el interior de una variable*/

// Función anónima "saludo"
const saludoA = function () {
  return "Hola funcion anonima";
};
console.log(saludoA()); // 'Hola'

//funcion aninima multiplicacion
const multi = function (a=1,b=1) {
  return a*b;
}
console.log('La multiplicaicon es: '+multi(a,b))

//area de un triangulo (b*h)/2
const areaTriangulo = function(b,a){
  return (b*a)/2;
}
console.log('Area de un triangulo: '+areaTriangulo(b,a))

//FUNCIONES CALLBACK
/*un callback es pasar una función B por parámetro 
a una función A, de modo que la función A 
puede ejecutar esa función B*/

// fB = Función B
const fB = function () {
  console.log("Función B ejecutada.");
};

// fA = Función A
const fA = function (callback) {
  callback();
};

fA(fB);

//Division

const division = function (b,a) {
  let res = b/a;
  console.log(`La division es: ${res}`)
}

const resul = function (cb) {
  cb(b,a);
}

resul(division)

//Area de un rombo (D*d)/2

const areaRombo = function (a) {
  let res = (a*a)/2;
  console.log('El area del rombo es: '+res);
}

const resRombo = function (cb) {
  cb(a)
}

resRombo(areaRombo)

//FUNCIONES AUTOEJECUTABLES

// Función autoejecutable
function hola() {
  console.log("Hola funcion autoejecutable!!");
}hola();

// Función autoejecutable con parámetros
function nombre(name) {
  console.log(`¡Hola, ${name}! desde una funcion autoejecutable`);
}nombre("Manz");

//Area de un romboide b*h
function areaRomboide(a,b) {
  let res = a*b;
  console.log('El area de un romboide es: '+res)
}areaRomboide(a,b);

//area de un trapecio ((b+B)/2)h
function areaTrapecio(a,b,c) {
  let res = ((a+b)/2)*c;
  console.log('El area de un trapacio es: '+res)
}areaTrapecio(a,b,c);

//CLOSURE / CLAUSULA
//Es una funcion que encierra variables dentro de su 
//propio ambito y estas siguen existiendo
//despues de se ejecucion

// Clausura: Función incr()
const incr = (function () {
  let num = 0;
  return function () {
    num++;
    return num;
  };
})();

console.log(incr()); // 1
console.log(incr()); // 2
console.log(incr()); // 3

//Ejemplo 2 de closure
const miContador = (function () {
  var _contador = 0;

function incrementar() {
  return _contador++;
}

function decrementar() {
  return _contador--;
}

function valor() {
  return _contador
}

return {
  incrementar: incrementar,
  decrementar: decrementar,
  valor: valor
}
})();

console.log(miContador.valor());
console.log(miContador.incrementar());
console.log(miContador.incrementar());
console.log(miContador.valor());
console.log(miContador.decrementar());
console.log(miContador.valor());


//ARROW FUNCTIONS
//Son una forma corta de escribir funciones
//Elimina la palabra function y añade =>

//Funcion por expresion
const func = function () {
  return "Función tradicional.";
};
console.log(func())

//Funcion flecha
const funct = () => {
  return "Función flecha.";
};

console.log(funct())

//Funcion flecha simplificada
const functi = () => "Funcion flecha en linea";
console.log(functi())

//Mas ejemplos
//Área de un circulo A = pi*(r)^2
const areaCirculo = (pi,r) => pi*(r**2);
console.log('El area de un circulo: '+areaCirculo(pi,r))

//Área de un pentagono A = (5a*b)/2
const areaPentagono = (a,b) =>  (5*a*b)/2;
console.log('El area de un pentagono: '+areaPentagono(a,b))

//ALCANCE DEL THIS
// Si son funciones globales
  const a3 = function () {
    console.log(this);
  };
  const b3 = () => {
    console.log(this);
  };
  a3(); // Window
  b3(); // Window


//OBJETOS
//es como una variable especial que puede contener más variables en su interior.

//Declaración de un objeto 
const player = {
  name: "Manz",
  life: 99,
  power: 10,
};

//Propiedades de un objeto
// Notación con puntos (preferida)
console.log(player.name);     // Muestra "Manz"
console.log(player.life);     // Muestra 99
// Notación con corchetes
console.log(player["name"]);  // Muestra "Manz"
console.log(player["life"]);  // Muestra 99

//Añadir propiedades 
// FORMA 1: A través de notación con puntos
const player2 = {};
player2.name = "Julio";
player2.life = 88;
player2.power = 7;

console.log(player2.name);
console.log(player2.life);
console.log(player2.power);

// FORMA 2: A través de notación con corchetes
const player3 = {};
player3["name"] = "Manz";
player3["life"] = 95;
player3["power"] = 20;

console.log(player3["name"]);
console.log(player3["life"]);
console.log(player3["power"]);

/*Métodos de un objeto 
Si dentro de una variable del objeto metemos una función (o una variable que contiene una función), tendríamos lo que se denomina un método de un objeto:*/
const user = {
  name: "Manz",
  talk: function() { return "Hola"; }
};
user.name;       // Es una variable (propiedad), devuelve "Manz"
user.talk();     // Es una función (método), se ejecuta y devuelve "Hola"

//Crear un objeto para una red social y agregar las propiedades: celular, pais, ciudad, una funcion saludar+name 

const user2 = {
    name: 'Julio',
    lastname: 'Pineda',
    email:'jpineadeveloper@gmail.com'
}

console.log(user2.name)
console.log(user2.lastname)
console.log(user2.email)
user2.celular = '092458645'
user2.address = {}
user2.address.pais='Ecuador'
user2.address.ciudad='Guayaquil'
console.log(user2.celular)
console.log(user2.address.pais)
console.log(user2.address.ciudad)
user2.saludar = function() {return "Hola "+user2.name}
console.log(user2.saludar())

//JSON
//es un formato ligero de datos, con una estructura (notación) específica
/* JSON.parse() = Transforma un json a objeto
    JSON.stringify() = Transforma un objeto a json
*/

const json = {
  "name": "Manz",
  "life": 3,
  "totalLife": 6,
  "power": 10,
  "dead": false,
  "props": ["invisibility", "coding", "happymood"],
  "senses": {
    "vision": 50,
    "audition": 75,
    "taste": 40,
    "touch": 80
  }
}

console.log(json)
//Convertir JSON a objeto 
const json2 = `{
  "name": "Manz",
  "life": 99
}`;

console.log(json2)
const userJson = JSON.parse(json2);
console.log(userJson)
console.log(userJson.name);  // "Manz"
console.log(userJson.life);  // 99

//Convertir objeto a JSON 
const userJson2 = {
  name: "Manz",
  life: 99,
  talk: function () {
    return "Hola!";
  },
};

console.log(JSON.stringify(userJson2));       // '{"name":"Manz","life":99}'


//Mas ejemplos de JSON
//objeto javascript
const usuario = {
    "id":"012345678",
    "username":"carlosazaustre",
    "password":"sdfgdfhsadsdf",
    "data":{
        "name":"Carlos Azaustre",
        "email":"carlosazaustre@gmail.com",
        "city":"Madrid",
        "country":"ES"
    },
    "preferences":{
        "contact":{
            "email":true,
            "notify":true
        },
        "interest":[
            "javascript",
            "nodejs",
            "angularjs"
        ]
    }
};

//accediendo a sus propiedades
console.log(usuario)
console.log(usuario.data.city);
console.log(usuario.preferences.interest)
//Serializando convertir objeto a json
const jsonSerializado = JSON.stringify(usuario);
console.log(jsonSerializado)
//Reconstruido JSON a objeto
const jsonReconstruido = JSON.parse(jsonSerializado)
console.log(jsonReconstruido)
