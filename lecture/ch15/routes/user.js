const express = require('express');

const router = express.Router();

// GET /user 라우터
router.get('/:id', (req, res) => {
  res.send(`Hello, User ${req.params.id}`);
});

module.exports = router;