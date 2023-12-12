const fs = require('fs');

const writeStream = fs.createWriteStream('ch06/writeme.txt')

writeStream.on('finish', () => {
  console.log('파일 쓰기 완료')
})

writeStream.write('이 글을 씁니다 \n')
writeStream.write('메모리 부하를 막기 위해 한 번 더 이렇게 씁니다.')
writeStream.write('메모리 부하를 막기 위해 한 번 더 이렇게 씁니다222.')
writeStream.end();