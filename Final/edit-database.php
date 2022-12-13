<?php
    $servername = "localhost:3308"; // swiss server designated localhost
    $username = "dev05dbuser"; // database dev02dbuser,dev03dbuser, etc.
    $password = "MmnCVtfx51YiO5pQ"; // password for your database FM02web2020,FM03web2020, etc.
    $dbname = "dev05db";


    $con = mysqli_connect($servername, $username, $password, $dbname);
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    echo "edit!!";
    
    $con->close();
?>