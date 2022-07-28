//Es buena práctica las env variables con mayúscula
let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'no tengo web';

console.log('Hola '+ nombre);
console.log('Mi web es ' + web);