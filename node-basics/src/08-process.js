const { exec, spawn } = require('child_process');

//exec

exec('ls -la', (err, stdout, stderr) => { //executes a process
    if(err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
})

//spawn

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => { //shows the console output of the process
    console.log(dato.toString());
});

proceso.on('exit', () => { //run a function in a certain state of the process
    console.log('The process has ended');
})