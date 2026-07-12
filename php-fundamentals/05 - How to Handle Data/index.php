<?php
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
    # code...
    $firstname = $_POST["First_Name"];
    $lastname = $_POST["Last_Name"];
    $favoritept = $_POST["Favorite_Pet"];

        // These empty function in for validation in submission form
    if (empty($firstname) || empty($lastname) || empty($favoritepet)) {
        # code...
        exit();
        header("Location: index.html");
    }

}
    echo "Thank you, for your submission";
    echo "<br>";
    echo $firstname;
    echo "<br>";
    echo $lastname;
    echo "<br>";
    echo $favoritepet;





