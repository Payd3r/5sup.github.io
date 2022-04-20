<?php
require_once 'config.php';
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_POST["operatore"]) && !empty($_POST["collo"]) && !empty($_POST["tipo"]) && !empty($_POST["data"])) {
        $sql = "INSERT INTO consegna (idOperatore, idCollo, stato, data) VALUES (?, ?, ?,?)";
        $a = $_POST["operatore"];
        $b = $_POST["collo"];
        $c = $_POST["tipo"];
        $d = $_POST["data"];
        if ($stmt = mysqli_prepare($link, $sql)) {
            mysqli_stmt_bind_param($stmt, "ssss", $a, $b, $c, $d);
            if (mysqli_stmt_execute($stmt)) {
                header("location: index.php");
                exit();
            } else {
                echo "Something went wrong. Please try again later.";
            }
        }
        mysqli_stmt_close($stmt);
    }
    mysqli_close($link);
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Create Record</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <style type="text/css">
        .wrapper {
            width: 500px;
            margin: 0 auto;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header">
                        <h2>Registrazione consegna</h2>
                    </div>
                    <p>Please fill this form and submit to add a record to the database.</p>
                    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                        <div class="form-group">
                            <label>idOperatore</label>
                            <input type="text" name="operatore" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>idCollo</label>
                            <input type="text" name="collo" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="form-check-label">Effettuata</label>
                            <input type="radio" id="comune" name="tipo" value="effettuata" class="form-check-input">
                            <label class="form-check-label">Fallita</label>
                            <input type="radio" id="rara" name="tipo" value="fallita" class="form-check-input">
                        </div>
                        <div class="form-group">
                            <label>Data</label>
                            <input type="date" data-date-format="mm/dd/yyyy" style="width:100%" class="form-control form-control-sm mb-2" name="data">
                        </div>
                        <input type="submit" class="btn btn-primary" value="Submit">
                        <a href="index.php" class="btn btn-default">Cancel</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>