//callbacks

function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("hello" + nombre);
    miCallback(nombre);
  }, 1000);
}

function by(nombre, otroCallBack) {
  setTimeout(() => {
    console.log("by" + nombre);
    otroCallBack();
  }, 1000);
}

hola("Fabio", (nombre) => {
  by(nombre, () => {
    console.log('This is the end');
  })
});

//Función para simplificar callbacks
//Promises
//async - await