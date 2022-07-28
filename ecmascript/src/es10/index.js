//array flat

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

//flatmap

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value*2]));

//trim

let hello = '                        hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello world                ';
console.log(hello);
console.log(hello.trimEnd());

//authomatic error declaration in try/catch

try {

} catch {
    error
}

//from entries

let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

//mySymbol

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);