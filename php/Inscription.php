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


?>