const fs = require('fs');

let count = 0

const timer = setInterval(() => {
  fs.unlink('./abcdefg.js', (err) => {
    if (err) {
      console.error(err)
    }
  })

  count++;
  if (count >= 5) {
    clearInterval(timer)
  }
}, 500)