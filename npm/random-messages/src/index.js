const messages = [
  "Gabriela",
  "Patricia",
  "Nicolle",
  "Sofia",
  "Maria",
  "Thalía",
  "Camila"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]; //asigna un elemento aleatorio de messages
  console.log(message);
};

module.exports = { randomMsg };
