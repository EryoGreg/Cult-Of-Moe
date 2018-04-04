var express = require('express');
var router = express.Router();
var path = require('path');
const Users = require('../models/Users');


/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname, '../views/index.html'))
});

router.get('/image/:id', function (req, res, next) {
    ///todo ID
    // res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname, '../views/image.html'))
});

router.get('/inscription', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/inscription.html'))
});

router.get('/connexion', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/connexion.html'))
});

router.post('/inscription', function (req, res) {
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let email = req.body.email;
    let password = req.body.password;

    console.log('nom : ' + nom);

    Users.create({nom: nom, prenom: prenom, email: email, password: password})
        .then(function () {
            res.redirect('/');
        });
});

router.post('/login', function (req, res) {
    let infos = req.body.email + " " + req.body.password;
    console.log("infos : " + infos);
    res.send(req.body)
});


module.exports = router;
