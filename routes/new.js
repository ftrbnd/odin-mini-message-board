const express = require('express');
const router = express.Router();

router.get('/', function (_req, res, _next) {
  res.render('form');
});

module.exports = router;
