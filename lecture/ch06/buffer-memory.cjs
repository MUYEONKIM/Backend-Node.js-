const fs = require('fs');

console.log('before : ', process.memoryUsage().rss);

const data1 = fs.readFileSync('ch06/big.txt')
fs.writeFileSync('ch06/buffer.txt', data1)
console.log('buffer : ', process.memoryUsage().rss)
