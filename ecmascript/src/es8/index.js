//turn obj into array

const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//create an array with obj values

const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana",
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

//add elements to a string with fixed lenght

const string = 'hello';
console.log(string.padStart(8,'hi'));
console.log(string.padEnd(12,' -----'));

//async & await

const helloWorld = () => {
    return new Promise((res, rej) => {
        (true)
            ? setTimeout(() => res('Hello World'), 3000)
            : rej(new Error('Test Error'));
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (e) {
        console.log(e);
    }
};

anotherFunction();