//replace all

const string = "JS es el mejor lenguaje de programación, así como JS";

const replacedString = string.replace("JS", "python");
console.log(replacedString);

const replaceStringAll = string.replaceAll("JS", "Python");
console.log(replaceStringAll);

//métodos privados

class Message {
    #show(val) {
        console.log(val);
    };
    get #ele {
        ...
    }
    set #add(val) {
        ...
    }
}

const message = new Message();
message.show("Hola"); //error

//promise any

const promise1 = new Promise((res, rej) => rej("1"));
const promise2 = new Promise((res, rej) => res("2"));
const promise3 = new Promise((res, rej) => res("3"));

Promise.any([promise1, promise2, promise3])
    .then(res => console.log(res));

//weak ref (se usa para evitar que el garbege collector acabe la clase)

class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
    {...}
};

//Nuevos operadores

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefinded;
let isFalse = false;
console.log(isTrue ??= isFalse);