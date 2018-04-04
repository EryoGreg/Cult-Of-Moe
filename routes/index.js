var express = require('express');
var router = express.Router();
var path = require('path');


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

router.post('/login', function (req, res) {
    var infos = req.body.email + " " + req.body.password;
    console.log("infos : " + infos);
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

// router.get('/image.php', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//     res.sendFile(path.join(__dirname, '../views/image.php'))
// });


module.exports = router;
