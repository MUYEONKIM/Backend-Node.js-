const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000) // 전역변수 같은 느낌

// app.use((req, res, next) => { // 이런 식으로 미들웨어를 동시에 삽입도 가능
//   console.log("모든 요청에 실행하고 싶어요")
//   next()
// }, (req, res, next) => {
//   console.log("모든 요청에 실행하고 싶어요2")
//   next()
// })
// }, (req, res, next) => {
//   throw new Error("에러가 났어요")
// })

app.use((req, res, next) => { // 에러 처리
  console.log("모든 요청에 실행하고 싶어요")
  next()
}, (req, res, next) => {
  try {
    console.log(asdasad)
  } catch (error) {
    next(error)
  }
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  // res.send('안녕하세요.')
  // res.json({ hello: 'mumu' }) // return이 아니라서 함수 종료가 아님
  // res.writeHead(200, {})
  console.log("렌더링 됬어요")
});

// app.get('/category/:name', (req, res) => {
//   res.send(`hello ${req.params.name}`)
// })

app.post('/', (req, res) => {
  res.send('hello express');
});

app.get('/about', (req, res) => {
  res.send('hello express');
});

app.use((req, res, next) => {
  res.send('404지롱')
})

app.use((err, req, res, next) => { // 에러 미들웨어는 인자 4개를 다 써주어야 함 (생략 불가능)
  // console.error(err);
  res.send("에러가 발생하였습니다. ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴ")
})

app.listen(3000, () => {
  console.log('익스프레스 서버 실행');
});