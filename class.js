const fs = require("fs").promises;

fs.readFile("./questions/bad.txt", "utf-8")
  .then((data) => console.log(data))
  .catch(console.error);
