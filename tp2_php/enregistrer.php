<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Enregistrement</title>
</head>
<body>
    <?php
    @include("connexion.php");

    
    $a = $_POST["login"];
    $b = $_POST["mdp"];
    $c = $_POST["fonction"];

    
    $reql = "INSERT INTO user VALUES ('$a', '$b', '$c')";
    $rl = mysqli_query($conn, $reql);

    
    if ($rl) {
        echo "<center><p>Enregistrement effectué avec succès</p></center>";
    } else {
        echo "<center><p>Erreur lors de l'enregistrement : " . mysqli_error($conn) . "</p></center>";
    }

    echo '<center><a href="index.html">Retour</a></center>';

    
    mysqli_close($conn);
    ?>
</body>
</html>

