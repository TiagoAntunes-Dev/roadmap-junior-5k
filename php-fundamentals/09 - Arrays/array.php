<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 

    $fruits = [
    "Apple", // 0 
    "Banana", // 1 O echo identifica as variavel por numeros comecando por 0
    "Cherry" // 2
    ];

    array_splice($fruits, 0, 1);

    echo $fruits [1];

    ?>

</body>
</html>



