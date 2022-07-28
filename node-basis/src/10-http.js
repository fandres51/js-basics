const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva petición");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hello from http in Nodejs");
      break;
    default:
      res.write("What the hell do you want?");
  }
  res.end();

  res.writeHead(201, { "Content-Type": "text/plain" });
}

console.log("Listening at port 3000");
