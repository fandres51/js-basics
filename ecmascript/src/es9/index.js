//operador de reposo

const obj = {
    name: 'Fandres',
    age: 23,
    country: 'EC',
};

let { country, ...all } = obj;
console.log(all);

//operador de propagación

const obj1 = {
    name: 'Fandres',
    age: 23,
};

const obj2 = {
    ...obj1,
    country: 'EC'
};

console.log(obj2);

//promise.finaly

const helloWorld = () => {
    return new Promise((res, rej) => {
        (true)
            ? setTimeout(() => res('Hello World'), 3000)
            : rej(new Error('Test Error'))
    });
};

helloWorld()
    .then(res => console.log(res))
    .catch(e => console.log(e))
    .finally(() => console.log('Fin'));

//regexData

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2019-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);