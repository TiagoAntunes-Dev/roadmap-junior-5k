<?php

$boll = true;
$a = 1;
$b = 4;




switch ($a) {
    case 1: 
        echo "The first case is true";
        # code...
        break;
    
    case 2:
        echo "The second case is true";
        # code...
        break;

    case 3: 
        echo "The third case is true";
        break;

    default:
        # code...
        echo "The Default case is executed";
}

// IF Version of the above switch case

/*if ($a == 1) {
    # code...
    echo "The Conditon is True";
} elseif ($a > 1) {
    # code...
    echo "The Second Condition is True";
}   else {
    # code...
    echo "None of the conditions were true";
}*/


if ($a < $b && $boll == false) {
    # code...
    echo "The Conditon is True";
} elseif ($a < $b && $boll == true) {
    # code...
    echo "The Second Condition is True";
}   else {
    # code...
    echo "None of the conditions were true";
}