const fs = require('fs');

console.log('before : ', process.memoryUsage().rss);

const readStream = fs.createReadStream('ch06/big.txt')
const writeStream = fs.createWriteStream('ch06/stream.txt')
readStream.pipe(writeStream);
readStream.on('end', () => {
  console.log('stream : ', process.memoryUsage().rss)
})
