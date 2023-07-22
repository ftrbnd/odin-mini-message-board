const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (_req, res, _next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.post('/new', function (req, res, _next) {
  const author = req.body.author;
  const message = req.body.message;

  messages.push({ text: message, user: author, added: new Date() });

  res.redirect('/');
});

module.exports = router;
