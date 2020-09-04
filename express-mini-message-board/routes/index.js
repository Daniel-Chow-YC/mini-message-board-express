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

module.exports = router;
