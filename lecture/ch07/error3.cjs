const fs = require('fs').promises;

const timer = setInterval(() => {
  fs.unlink('./asdfasd.js')
}, 1000)


