var express = require('express');
var session = require('express-session');
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

    if(req.session.Users)
    {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    }
    res.sendFile(path.join(__dirname, '../views/connexion.html'))
});




router.post('/inscription', async function (req, res) {
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let email = req.body.email;
    let password = req.body.password;

    Users.create({nom: nom, prenom: prenom, email: email, password: password})

        .then(function () {
            req.session.email = email;
            req.session.password = password;
            console.log(email);


        //cookie
        req.session.nom = nom;
        req.session.prenom = prenom;





            res.redirect('/');
        });
});

    router.post('/connexion', async function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    var nomUser = await Users.findAll({where : {email: req.body.email}});


    if (password == nomUser[0].dataValues.password)
    {

        req.session.email = email;
        req.session.password = password;

        var nom = nomUser[0].dataValues.nom;
        var prenom = nomUser[0].dataValues.prenom;
        console.log(nom);
        console.log(prenom);


        //cookie
        req.session.nom = nom;
        req.session.prenom = prenom;

        res.sendFile(path.join(__dirname, '../views/index.html'));
    }

    else{
        console.log("Nope");
        res.write('<p>"Bad email/password"</p>');
        res.sendFile(path.join(__dirname, '../views/connexion.html'));
        }

});

//TODO

router.get('/profil', async function (req, res) {
    // res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname, '../views/profil.html'));

    var nom = req.session.nom;
    req.session.nom = nom;
    console.log(nom);
    
    var prenom = req.session.prenom;
    req.session.prenom = prenom;
    console.log(prenom);

    var email = req.session.email;
    req.session.email = email;
    console.log(email);

    var password = req.session.password;
    req.session.password = password;
    console.log(password);
});



router.get('/image', function(req,res){
    res.render('image',
  { id : 'imageId' })
})


router.get('/deconnection', function(req, res){
    req.session.destroy(function() {
        res.clearCookie('connect.sid', { path: '/' }).status(200).send('Cookie deleted.');

      });
    //req.session = null;
    //res.sendFile(path.join(__dirname, '../views/index.html'));

})
module.exports = router;


