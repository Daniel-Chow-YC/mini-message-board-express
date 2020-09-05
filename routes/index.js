var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello world! Does anybody use this website?",
    user: "Daniel",
    added: new Date()
  },
  {
    text: "Hello there this is my message! ",
    user: "James",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages});
});

// New Message Form Page
router.get('/new', function(req, res) {
  res.render('form', {title: 'New Message'} )
});

router.post('/new', function(req, res) {
  let messageText = req.body.msg;
  let messageUser = req.body.name;
  messages.push({text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
})

module.exports = router;
