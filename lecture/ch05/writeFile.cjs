const fs = require('fs').promises;

fs.writeFile('ch05/readme22.txt', '글이 입력됩니다')
  .then(() => {
    return fs.readFile('ch05/readme22.txt')
  })
  .then((data) => {
    console.log(data.toString())
  })
  .catch((err) => {
    throw err;
  })