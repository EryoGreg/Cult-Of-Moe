<?php


try
{
    $bdd = new PDO('mysql:host=localhost; dbname=cult_of_moe;charset=utf8', 'root', '');
}
catch(Exception $e)
{
    die ('Erreur : '.$e->getMessage());
}

// Liste des utilisateurs PHP   #1
$req = $bdd->prepare('SELECT * FROM user');
$req->execute();
while ($donnees = $req->fetch())
{
    echo $donnees['Pseudo'].'</br>';
}


/*      Ajout d'un utilisateur PHP  #2
if (isset($_POST['envoyer'])){
    $req = $bdd->prepare('INSERT INTO utilisateur (pseudo, password, mail) VALUES (?,?,?)');
    $req->execute(array($_POST['pseudo'], $_POST['password'], $_POST['mail']));
}
*/


/* Connexion au site as utilisateur #3
if (isset($_POST['envoyer'])){
    $req = $bdd->prepare('SELECT count (id) AS "nb" FROM utilisateur WHERE mail = ? AND password = ?');
    $req->execute(array($_POST['mail'], $_POST['password']));

    $result = $req->fetch();
    session_start();
    $SESSION['user_id'] | = $result['id'];
}


*/


?>


<!-- Formulaire d'inscription   #2
<form method="post" action="">
    <input type="text" name="pseudo" placeholder="pseudo"/>
    <input type="password" name="password" placeholder="password">
    <input type="email" name="mail" placeholder="mail">
    <button type="submit" name="envoyer">Envoyer</button>
</form>
-->


<!-- Formulaire de connexion au site    #3
<form method="post" action="">
    <input type="password" name="password" placeholder="password">
    <input type="email" name="mail" placeholder="mail">
    <button type="submit" name="envoyer">Envoyer</button>
</form>
-->