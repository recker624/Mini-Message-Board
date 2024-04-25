var express = require('express');
var router = express.Router();

const monthsAbbreviated = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const messages = [
  {
    text: "Hi there",
    user: "Amando",
    added: (new Date()).toUTCString()
  },
  {
    text: "Hello World",
    user: "Charles",
    added: (new Date()).toUTCString()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages });
});


router.post("/", (req, res, next) => {
  const user = req.body.user;
  const message = req.body.message;
  const added = (new Date()).toUTCString();

  messages.push({ text: message, user: user, added: added });
  res.redirect("/");
});

module.exports = router;
