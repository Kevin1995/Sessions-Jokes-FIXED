var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('jokes', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var jokesTyped = req.body.jokesTyped;

  jokesTyped = jokesTyped.trim();

  if(jokesTyped !== ""){
    req.session.jokesTyped = jokesTyped;
    console.log(jokesTyped);
    res.redirect('/jokes');
  }
});

module.exports = router;
