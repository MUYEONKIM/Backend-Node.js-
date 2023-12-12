const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('ch06/readme.txt', { highWaterMark: 16 });
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('ch06/writeme.txt')
readStream.pipe(zlibStream).pipe(writeStream)