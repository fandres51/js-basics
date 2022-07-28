process.on("exit", () => {
  console.log("The process has ended");
  setTimeout(() => {
    console.log("This won\'t show up");
  }, 1000);
}); //oitsire the eventoloop (only sync code)

process.on("beforeExit", () => {
  console.log("The process is going to end");
});

process.on("uncaughtException", (err, origin) => {
  console.error("Oops, We forgot about to catch an error: ");
  console.error("\n", err, "\n");
}); //for errors

process.on("uncaughtRejection", (err, origin) => {
  console.error("We forgot about to catch an error");
}); //for promises

//example

oooo(); //exception
console.log("This won't show up if the process fails");
