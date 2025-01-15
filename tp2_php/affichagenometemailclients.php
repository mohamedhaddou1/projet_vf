<html>
    <body>
        <?php
        include("connexion.php");

        $requete = "SELECT nom, email FROM clients";
        $resultat = mysqli_query($conn, $requete);

        if (!$resultat) {
            die("Erreur dans la requête : " . mysqli_error($conn));
        }
        ?>

        <center>
            <table border="1">
                <tr>
                    <td>nom</td>
                    <td>email</td>
                    
                </tr>
                <?php
                while ($enreg = mysqli_fetch_array($resultat)) {
                    echo "<tr>";
                    echo "<td>" . $enreg['nom'] . "</td>";
                    echo "<td>" . $enreg['email'] . "</td>";
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
