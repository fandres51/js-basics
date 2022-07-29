//asigna espacios de memoria
let buffer = Buffer.alloc(4);
console.log(buffer);

//asigna elementos
buffer = Buffer.from([1,2,3,4]);
console.log(buffer);

buffer = Buffer.from('Hola');
console.log(buffer);
console.log(buffer.toString());

//ejemplo de abecedario
let abc = Buffer.alloc(26);
abc = abc.map((i, n) => i + 97 + n);
console.log(abc.toString());

//STREAMS

const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';
let readableStram = fs.createReadStream(__dirname + '/extras/14-input.txt');

//streams de lectura
readableStram.setEncoding('UTF8');
readableStram.on('data', (chunk) => {
    //console.log('\n' + chunk);
    data += chunk;
});

readableStram.on('end', () => {
    console.log('\n' + data);
})

process.stdout.write('\nHola\n'); //escritura en la salida estandar del sistema