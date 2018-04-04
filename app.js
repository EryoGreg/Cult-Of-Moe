
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);  // app.use sert aux middlewares // app.all pour toutes les requettes http sinon app.get/post etc

app.get('/inscription', function (req, res) {
    res.sendFile(path.join(__dirname, './views/inscription.html'))
});

app.get('/connexion', function (req, res) {
    res.sendFile(path.join(__dirname, './views/connexion.html'))
});

app.post('/login', function (req,res) {
    var infos = req.body.email + " " + req.body.password;
    console.log("infos : "+infos);
    res.send(req.body)


/*
    <?php
   if(isset($_POST['Submit']))
   {
    //Renvoie vers la page principale
    header('Location: /');
   }
?>

<?php
$json = 'infos';

var_dump(json_decode($json));
var_dump(json_decode($json, true));
?>

*/
});



// composents des pages chargés
app.use(express.static('public'));
app.use(express.static('bower_components'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
