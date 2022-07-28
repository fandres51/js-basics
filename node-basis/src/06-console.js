//básicos

console.log('Hola');
console.info('Hola');
console.warn('Hola');
console.error('Hola');

//tabla

let table = [
    {
        name: 'FA',
        age: 25
    },
    {
        name: 'FA',
        age: 25
    }
]

console.table(table);

//grupos

console.group('Conversación: ');
console.log('Hola');
console.log('bLAbLA');
console.log('Chao');
console.groupEnd('Fin');

function adentro() {
    console.group('Estoy adentro: ');
    console.log('María');
    console.log('Camila');
    console.log('Salomé');
    console.groupEnd('Fin adentro');        
}

function ajuera() {
    console.group('Estoy ajueeeera: ');
    console.log('Juan');
    console.log('Pepe');
    console.log('Pablo');
    adentro();
    console.groupEnd('Fin ajueeera');        
}

ajuera();

//contador

console.count('OK');
console.count('OK');
console.count('OK');
console.count('OK');
console.count('OK');