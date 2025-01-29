<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liste des produits</title>
</head>
<body>

<?php
include("connexion.php");

$requete = "SELECT * FROM produits";
$resultat = mysqli_query($conn, $requete);

if (!$resultat) {
    die("<center><h1>Erreur dans la requête : " . mysqli_error($conn) . "</h1></center>");
}
?>

<center>
    <table>
        <thead>
            <tr>
                <th>ID Produit</th>
                <th>Nom Produit</th>
                <th>Prix</th>
                <th>Stock</th>
                <th>Disponibilité</th>
                <th>Suppression</th>
            </tr>
        </thead>
        <tbody>
            <?php while ($enreg = mysqli_fetch_assoc($resultat)) : ?>
                <tr>
                    <td><?= htmlspecialchars($enreg['id_produit']) ?></td>
                    <td><?= htmlspecialchars($enreg['nom_produit']) ?></td>
                    <td><?= htmlspecialchars($enreg['prix']) ?> €</td>
                    <td><?= htmlspecialchars($enreg['stock']) ?></td>
                    <td><?= htmlspecialchars($enreg['disponibility']) ?></td>
                    <td>
                        <a href="supprimer.php?id=<?= urlencode($enreg['id_produit']) ?>" 
                           onclick="return confirm('Voulez-vous vraiment supprimer ce produit ?');">
                           Supprimer
                        </a>
                    </td>
                </tr>
            <?php endwhile; ?>
        </tbody>
    </table>
</center>

<?php
mysqli_close($conn);
?>

</body>
</html>
