<div class="container-table100 pt-3">
    <div class="wrap-table100">
        <div class="table100">
            <?php
            require_once 'config.php';
            $sql = "SELECT * FROM consegna INNER JOIN operatore on consegna.idOperatore=operatore.matricola";
            echo "<table class='display shadow-lg tabella' style='width:100%'><thead><tr>";
            echo "      <th class='pl-4'> Operatore</th>";
            echo "      <th> Collo</th>";
            echo "      <th> Stato </th>";
            echo "      <th > Data </th>";
            echo "      </tr></thead><tbody>";
            if ($result = mysqli_query($link, $sql)) {
                if (mysqli_num_rows($result) > 0) {
                    while ($row = mysqli_fetch_array($result)) {
                        echo "<tr>";
                        echo "<td class='pl-4'>" . $row['Nome'] . " " . $row['cognome'] . "</td>";
                        echo "<td>" . $row['idCollo'] . "</td>";
                        if ($row['stato'] == "effettuata")
                            echo "<td style='text-align:left'>  <span class='dot-green'></span>&nbsp&nbsp</td>";
                        else
                            echo "<td style='text-align:left'>  <span class='dot-red'></span> &nbsp&nbsp </td>";
                        echo "<td>" . $row['data'] . "</td>";
                    }
                    mysqli_free_result($result);
                }
            } else {
                echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
            }
            echo "</tbody></table>";
            ?>
        </div>
    </div>
</div>