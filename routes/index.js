var express = require('express');
var router = express.Router();
var path = require('path');
const Users = require('../models/Users');


/* GET home page. */
router.get('/', function (req, res) {
    // res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname, '../views/index.html'))
});

router.get('/image/:id', function (req, res) {
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

    Users.create({nom: nom, prenom: prenom, email: email, password: password})

        .then(function () {
            res.redirect('/');
        });
});




router.post('/connexion', async function (req, res) {
    
    var email = req.body.email;
    var password = req.body.password;

    var nomUser = await Users.findAll({where : {email: req.body.email}});

    if (password == nomUser[0].dataValues.password)
    {
        console.log(nomUser[0].dataValues.password);
        console.log(nomUser[0].dataValues.email);
        res.sendFile(path.join(__dirname, '../views/index.html'));
    }

    else{
        console.log("Nope");
        return;
        }

});

router.get('/profil', function (req, res) {
    // res.render('index', { title: 'Express' });
    // res.sendFile(path.join(__dirname, '../views/profil.html'))
    res.render('profil', {nom: 'mynom', prenom: 'myprenom', email: 'myemail', id: 123})
});

module.exports = router;
