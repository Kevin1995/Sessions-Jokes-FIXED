var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var password = req.body.password;

  password = password.trim();

  if(password !== "KnockKnock"){
    console.log("Wrong Password");
    res.redirect('/');
  }

  else {
    req.session.password = password;
    console.log("Right Password");
    res.redirect('/jokes');
  }
});

module.exports = router;
