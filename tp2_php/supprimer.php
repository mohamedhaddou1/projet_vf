<?php
include("connexion.php"); // Supprimez '@' pour voir les erreurs si la connexion échoue

if (isset($_GET['id']) && ctype_digit($_GET['id'])) { // Vérifie si l'ID est un entier
    $id = (int) $_GET['id']; // Convertit en entier pour éviter les injections SQL

    // Utilisation d'une requête préparée pour éviter l'injection SQL
    $requete = "DELETE FROM produits WHERE id_produit = ?";
    $stmt = mysqli_prepare($conn, $requete);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "i", $id);
        $resultat = mysqli_stmt_execute($stmt);

        if ($resultat) {
            mysqli_stmt_close($stmt);
            mysqli_close($conn);
            header("Location: suppression.php");
            exit; // Arrête l'exécution après la redirection
        } else {
            die("Erreur lors de la suppression : " . mysqli_error($conn));
        }
    } else {
        die("Erreur de préparation de la requête : " . mysqli_error($conn));
    }
} else {
    echo "ID du produit non spécifié ou invalide.";
}
?>

