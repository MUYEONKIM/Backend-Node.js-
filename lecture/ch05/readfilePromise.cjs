const fs = require('fs').promises;

fs.readFile('ch05/readme.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  })