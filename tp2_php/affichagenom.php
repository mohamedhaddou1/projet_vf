<html>
<body>
<?php
include("connexion.php");
?>

<center>
    <h1>Rechercher un client</h1>
    <form method="POST" action="">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required>
        <button type="submit">Rechercher</button>
    </form>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['nom'])) {
    $nom = mysqli_real_escape_string($conn, $_POST['nom']);
    $requete = "SELECT id_client, prenom, nom, email, date_inscription FROM clients WHERE nom = '$nom'";
    $resultat = mysqli_query($conn, $requete);

    if ($resultat && mysqli_num_rows($resultat) > 0) {
        echo '<table border="1">';
        echo '<tr><th>ID</th><th>Prénom</th><th>Nom</th><th>Email</th><th>Date Inscription</th></tr>';
        
        while ($client = mysqli_fetch_assoc($resultat)) {
            echo '<tr>';
            echo '<td>' . htmlspecialchars($client['id_client']) . '</td>';
            echo '<td>' . htmlspecialchars($client['prenom']) . '</td>';
            echo '<td>' . htmlspecialchars($client['nom']) . '</td>';
            echo '<td>' . htmlspecialchars($client['email']) . '</td>';
            echo '<td>' . htmlspecialchars($client['date_inscription']) . '</td>';
            echo '</tr>';
        }
        echo '</table>';
    } else {
        echo '<p>Aucun client trouvé.</p>';
    }

    mysqli_free_result($resultat);
}

mysqli_close($conn);
?>

<a href="index.html">Retour Accueil</a>
</center>
</body>
</html>

