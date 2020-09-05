var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there! Welcome to my mini message board that I created during my time learning NodeJS.",
    user: "Daniel",
    added: new Date()
  },
  {
    text: "Feel free to play around and see how it works!",
    user: "Admin",
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
