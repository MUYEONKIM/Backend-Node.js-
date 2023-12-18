const express = require('express');

const router = express.Router();

// 라우터 그룹화 하기
// router.get('/', (req, res) => {
//   res.send('Hello, Express');
// });

// router.post('/', (req, res) => {
//   res.send('post hello')
// })

router.route('/')
  .get((req, res) => {
    res.send('GET Hello, express');
  })
  .post((req, res) => {
    res.send('POST HELLO EXPRESS');
  });

module.exports = router;