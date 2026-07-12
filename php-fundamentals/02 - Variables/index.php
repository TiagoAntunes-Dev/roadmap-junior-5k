<?php
    //Variables = A reusable container that holds data strings, integer, float, boolean //
    $name = "Bro Code"; // string, text surrounded by quotes //
    $food = "Milkshake"; // string, text surrounded by quotes //
    $email = "fake@gmail.com"; // string, text surrounded by quotes //
    
    $age = 26; // integer, numbers without decimal point//
    $users = 2; // integer, numbers without decimal point//
    $quantity = 5; // integer, numbers without decimal point//

    $gpa = 4.7; // float
    
    $umployed = true; // boolean, true or false //
    $online = false; // boolean, true or false //
    $for_sale = true; // boolean, true or false //
    $price = 3.99; // float, numbers with decimal point //

    $total = null; // null, no value assigned //

    // One array can have multiple types of data //

    $names = array ("Daniel", "Johan", "Tenma");
    $job = ["Doctor", "Firefighter", "Kitchen Hand"];


    echo "You have ordered {$quantity} x {$food}s";
    echo "<br>";
    $total = $quantity * $price;
    echo "Your total is \${$total}";


?>