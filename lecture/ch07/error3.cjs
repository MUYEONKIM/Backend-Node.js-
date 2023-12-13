const fs = require('fs').promises;

// let time = 0

const timer = setInterval(() => {
  fs.unlink('./asdfasd.js')
}, 1000)

// if (time === 3) clearInterval(timer)

