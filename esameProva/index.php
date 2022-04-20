<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="table.css">
</head>

<body>
    <div class="limiter pt-5">
        <strong>
            <h2 class="pull-left pl-5"> Tabella consegne </h2>
            <a href="inserisci.php"><button type='button' class='btn btn-outline-secondary pull-right mr-3'>
                    Registra Consegna
                </button></a>
        </strong>
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
    </div>
</body>

</html>