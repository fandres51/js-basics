const os = require('os');

console.log(os.arch()); //x32 or x64
console.log(os.platform()); //win, linux or mac
console.log(os.cpus()); //cores info
console.log(os.cpus().length); //number of cores
console.log(os.constants); //system constants
console.log(os.freemem()); //free ram memory
console.log(os.totalmem()); //total memory
console.log(os.homedir()); //home derectory
console.log(os.tmpdir()); //temporal derectory
console.log(os.networkInterfaces()); //all net interfaces

//example of totalmem and freemem in kb, mb or gb

const SIZE = 1024;
let kb = (bytes) => bytes/SIZE;
let mb = (bytes) => kb(bytes/SIZE);
let gb = (bytes) => mb(bytes/SIZE);

console.log(kb(os.freemem())); //free memory
console.log(mb(os.freemem())); //free memory
console.log(gb(os.freemem())); //free memory