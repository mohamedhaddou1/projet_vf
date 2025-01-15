<html>
    <body>
        <?php
        include("connexion.php");

        $requete = "SELECT * FROM commandes";
        $resultat = mysqli_query($conn, $requete);

        if (!$resultat) {
            die("Erreur dans la requête : " . mysqli_error($conn));
        }
        ?>

        <center>
            <table border="1">
                <tr>
                    <td>id_commande</td>
                    <td>id_client</td>
                    <td>date_commande</td>
                    <td>montant_total</td>
                    
                </tr>
                <?php
                while ($enreg = mysqli_fetch_array($resultat)) {
                    echo "<tr>";
                    echo "<td>" . $enreg['id_commande'] . "</td>";
                    echo "<td>" . $enreg['id_client'] . "</td>";
                    echo "<td>" . $enreg['date_commande'] . "</td>";
                    echo "<td>" . $enreg['montant_total'] . "</td>";
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
