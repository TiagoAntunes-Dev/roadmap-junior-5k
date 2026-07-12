<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="main.css">
    <script src="./index.php"></script>
    <title>Document</title>
</head>


<body>

    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">

    <input type="number" name="Num01" placeholder="Number one" required>
    <select name="Operator" id="">
        <option value="Add">+</option>
        <option value="Subtract">-</option>
        <option value="Multiple">*</option>
        <option value="Divide">/</option>
    </select>

    <input type="number" name="Num02" placeholder="Number two" required>
    <button>Calculate</button> 
    </form>

    <?php
    // Grab Data from input
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        # code...
        $num01 = filter_input(INPUT_POST, "Num01", FILTER_SANITIZE_NUMBER_FLOAT);
        $num02 = filter_input(INPUT_POST, "Num02", FILTER_SANITIZE_NUMBER_FLOAT);
        $operator = htmlspecialchars($_POST["Operator"]);
    }

    // Error Handlers
    $errors = false;

    if (empty($num01) || empty($num02) || empty($operator)) {
        # code...
        echo "<p class = 'cal-error'> Fill all the forms BITCH!</p>";
        $errors = true;
    }

    if (!is_numeric($num01) || !is_numeric($num02) ) {
        # code...
        echo "<p class = 'cal-error'> Only use Number your Fat FUCK!</p>";
        $errors =  false;
    }

    // Calculate the number when no errors appear

    if (!$errors) {
        $value = 0;
        # code...
        switch ($value) {
            case "Add":
                # code...
                $value = $num01 + $num02;
                break;

            case "Subtract":
                # code...
                $value = $num01 - $num02;
                break;

            case "Multiple":
                # code...
                $value = $num01 * $num02;
                break;

            case "Divide":
                # code...
                break;
            
            default:
                # code...
                $value = $num01 / $num02;
                break;
                echo "<p class = 'cal-error'> Eu sinto nada por vc!</p>";
        }

        echo "<p class = 'cal-result'>Result =" . $value. "</p>";
    }


    ?>
</body>



</html>

