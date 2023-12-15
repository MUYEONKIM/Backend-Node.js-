const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session')

const app = express();

app.set('port', process.env.PORT || 3000) // 전역변수 같은 느낌

app.use(morgan('combined'));
app.use("/qqq", express.static(path.join(__dirname, '/public')));
app.use(cookieParser('mumunodejs'))
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'mymypassword',
  cookie: {
    httpOnly: true,
  },
  name: 'connect.sid',
}
));
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // form data를 파싱해주는 것

app.use((req, res, next) => {
  req.data = "똥똥또로똥"
  next();
})

app.get('/', (req, res, next) => {
  console.log(__dirname)
  // 1. cookie-parser
  // req.cookies // {mycookie: 'test'}
  // req.signedCookies;
  // res.cookie('name', encodeURIComponent(name), {
  //   expires: new Date(),
  //   httpOnly: true,
  //   path: '/'
  // })
  // res.clearCookie('name', encodeURIComponent(name), {
  //   httpOnly: true,
  //   path: '/'
  // })

  // 2. body-parser
  // req.body.name // 이렇게 쉽게 body에 있는 것을 빼올 수 있다 

  // 3. sesscion
  req.session.id = 'hello'
  req.session.name = 'kakakakak'
  res.send('hello express11');
})

app.post('/', (req, res) => {
  res.send('hello express22');
});

app.get('/about', (req, res) => {
  res.send(`hello express33 ${req.data}`);
});

app.use((req, res, next) => {
  res.status(404).send('404지롱')
})

app.use((err, req, res, next) => { // 에러 미들웨어는 인자 4개를 다 써주어야 함 (생략 불가능), 모든 에러는 여기서 처리 
  // console.error(err);
  res.send("에러가 발생하였습니다. ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴ")
})

app.listen(3000, () => {
  console.log('익스프레스 서버 실행');
});