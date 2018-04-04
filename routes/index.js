var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname, '../views/index.html'))
});

router.get('/image', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname, '../views/image.html'))
});

router.get('/image.php', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname, '../views/image.php'))
});


module.exports = router;
