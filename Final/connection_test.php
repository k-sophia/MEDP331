<?php
    if(isset($_POST['symbol'])){
        $symbol = $_POST['symbol'];
    }

    $servername = "localhost:3308"; // swiss server designated localhost
    $username = "dev05dbuser"; // database dev02dbuser,dev03dbuser, etc.
    $password = "MmnCVtfx51YiO5pQ"; // password for your database FM02web2020,FM03web2020, etc.
    $dbname = "dev05db";


    $con = mysqli_connect($servername, $username, $password, $dbname);
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    // mysqli_select_db($con,"flowers")
    $symbol = "'%$symbol%'";
    $sql = "SELECT * FROM flowers WHERE symbolism like $symbol";
    $result = mysqli_query($con,$sql);
    if (!$result) {
        printf("Error: %s\n", mysqli_error($con));
        exit();
    }

    echo "<table>
    <tr>
    <th>name</th>
    <th>common names</th>
    <th>image</th>
    <th>symbolysm</th>
    <th>season</th>
    <th>maintenance</th>
    <th>water</th>
    <th>sun</th>
    <th>soil</th>
    </tr>";
    
    while($row = mysqli_fetch_array($result)) {
        $common = explode(",", $row['common_names']);
        $season = explode(",", $row['season']);
        $sun = explode(",", $row['sun']);
        $soil = explode(",", $row['soil']);
        $image = "<img src=" . $row["img"] . " height='150' width='auto'" .">";

        echo "<tr>";
        echo "<td>" . $row['names'] . "</td>";

        echo "<td>";
        foreach($common as $value){
            echo $value . "<br>";
        }
        echo "</td>";
        
        echo "<td>" . $image . "</td>";
        echo "<td>" . $row['symbolism'] . "</td>";

        echo "<td>";
        foreach($season as $value){
            echo $value . "<br>";
        }
        echo "</td>";
        
        echo "<td>" . $row['maintenance'] . "</td>";
        echo "<td>" . $row['water'] . "</td>";

        echo "<td>";
        foreach($sun as $value){
            echo $value . "<br>";
        }
        echo "</td>";

        echo "<td>";
        foreach($soil as $value){
            echo $value . "<br>";
        }
        echo "</td>";

        echo "</tr>";
    }
    echo "</table>";
    $con->close();
?>