<!DOCTYPE html>
<html>
<body>
<?php
@include("connexion.php");

$login = $_POST["login"];
$motdepasse = $_POST["mdp"];

$requete = "SELECT * FROM user WHERE login = '$login' AND mdp = '$motdepasse'";
$resultat = mysqli_query($conn, $requete);

$ligne = mysqli_num_rows($resultat);

if ($ligne > 0) {
    header("Location:menu.html");
} 
else {
    header("Location:index.html");
}
?>
</body>
</html>
