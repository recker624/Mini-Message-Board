var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World",
    user: "Charles",
    added: new Date(),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages });
});

router.get('/new', (req, res, next) => {
   res.render('form');
});

router.post("/new", (req, res, next) => {
  const user = req.body.user;
  const message = req.body.message;

  messages.push({ text: message, user: user, added: new Date() });
  res.redirect('/');
});

module.exports = router;
