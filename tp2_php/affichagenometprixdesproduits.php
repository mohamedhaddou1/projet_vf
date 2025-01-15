<html>
    <body>
        <?php
        include("connexion.php");

        $requete = "SELECT nom_produit, prix FROM produits";
        $resultat = mysqli_query($conn, $requete);

        if (!$resultat) {
            die("Erreur dans la requête : " . mysqli_error($conn));
        }
        ?>

        <center>
            <table border="1">
                <tr>
                    
                    <td>nom_produit</td>
                    <td>prix</td>
                    
                    
                </tr>
                <?php
                while ($enreg = mysqli_fetch_array($resultat)) {
                    echo "<tr>";
                    
                    echo "<td>" . $enreg['nom_produit'] . "</td>";
                    echo "<td>" . $enreg['prix'] . "</td>";
                    
                    echo "</tr>";
                }
                ?>
            </table>
        </center>

        <?php
        mysqli_close($conn);
        ?>
    </body>
</html>
