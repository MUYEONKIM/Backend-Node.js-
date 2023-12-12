const fs = require('fs').promises;


async function main() {
  let data = await fs.readFile('ch05/readme.txt')
  console.log('1번', data)
  data = await fs.readFile('ch05/readme.txt')
  console.log('2번', data)
  data = await fs.readFile('ch05/readme.txt')
  console.log('3번', data)
  data = await fs.readFile('ch05/readme.txt')
  console.log('4번', data)
}

main()

