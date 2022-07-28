// Valores por defecto

function myFirstFunction(name, age, country) {
  var name = name || "Andres";
  var age = age || "25";
  var country = country || "MX";
  console.log(name, age, country);
}

myFirstFunction();

// es6
function myES6Function(name = "Oscar", age = "25", country = "EC") {
  console.log(name, age, country);
}

myES6Function("María", 40, "CO");

// Templates literales

let hello = "Hello";
let world = "World";
let phrase = hello + " " + world;
console.log(phrase);

//es6
let phraseES6 = `${hello} ${world}`;
console.log(phraseES6);

//Sáltos de Línea

let lorem =
  "Ipsum quae debitis at praesentium. \n" +
  "Consectetur quisquam sequi fugit molestiae quasi saepe\n" +
  "consequatur debitis quia. Soluta consequatur et\n " +
  "non aut. Non quos nihil reprehenderit eos eaque nihil\n" +
  "laborum. Dolore expedita voluptate aut harum iusto placeat.";

let loremES6 = `Maiores qui est. Voluptatem deleniti 
dolores facere odio eum modi ipsum adipisci. 
Odit omnis temporibus fugiat eligendi accusantium 
libero quas dolorum. Corporis laborum architecto. 
Nam eum consequatur. Totam eos et doloribus aut odio 
corporis inventore et.`;

console.log(lorem);
console.log(loremES6);

//Destructuración de objetos

let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'EC',
}
console.log(person.name, person.age);

//es6
let { name, age } = person;
console.log(name, age);

//Unión de Arrays

let team1 = ['Kaicho', 'Kaguya', 'Ishigod'];
let team2 = ['Chika', 'Miko', 'Hayasaka'];
let characters = ['Maki', ...team1, ...team2];

console.log(characters);

//Var vs Let & Const

{
    var globalVar = "Global Var";
}
{
    let globalLet = 'Global Let'
    console.log(globalLet); 
}

console.log(globalVar);
// console.log(globalLet); //no se puede

const a = 'b';
// a = 'c'; //No se puede

//Asignación de variables a objetos

let name = 'Fabio';
let age = 25;

obj = {name: name, age: age};
objES6 = {name, age};

console.log(obj);
console.log(objES6);

//Arrow Functions

const names = [
    {name: 'Fabio', age: 25},
    {name: 'Camila', age: 19}
]

let listOfNames = names.map(function (item){
    console.log(item.name);
});

let listOfNamesES6V1 = names.map((item) => {
    console.log(item.name);
});

const helloPromise = () => {
    return new Promise((res, rej) => {
        if (true) res('Todo bien');
        else rej('X');
    })
}

helloPromise()
    .then(res=>console.log(res))
    .catch(rej=>console.log(rej));



