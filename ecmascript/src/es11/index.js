//dynamic imports

const button = document.getElementById("btn");

button.addEventListener("click", async () => {
    const module = await import("./file.js");
    module.hello();
});

//big int

const aBigNumber = 90071002540991n;
const anotherBigNumber = BigInt(90071002540991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//promise all settled

const promise1 = new Promise((res, rej) => rej("reject"));
const promise2 = new Promise((res, rej) => res("resolve"));
const promise3 = new Promise((res, rej) => res("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(res => console.log(res));

//global this

console.log(window);
console.log(globalThis);

//null

const fooo = null ?? 'default string';
console.log(fooo);

//optional shading

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email)
    console.log('email');
else
    console.log('fail');