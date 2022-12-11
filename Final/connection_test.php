<?php
    if(isset($_POST['cols'])){
        $cols = $_POST['cols'];
    }

    if(isset($_POST['symbol'])){
        $symbol = $_POST['symbol'];
    }

    if(isset($_POST['season'])){
        $season = $_POST['season'];
    }

    $servername = "localhost:3308"; // swiss server designated localhost
    $username = "dev05dbuser"; // database dev02dbuser,dev03dbuser, etc.
    $password = "MmnCVtfx51YiO5pQ"; // password for your database FM02web2020,FM03web2020, etc.
    $dbname = "dev05db";


    $con = mysqli_connect($servername, $username, $password, $dbname);
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    // sql query
    $columns = "img, names";
    $col_th = "
        <th>image</th>
        <th>name</th>";
    foreach ($cols as $value) {
        $columns .= ", $value";
        $col_th .= "<th>$value</th>";
    }

    $where = "";

    if($symbol != "") {
        $where .= "symbolism like " . "'%$symbol%'";
    }

    if($symbol != "" && $season != "") {
        $where .= " AND season like " . "'%$season%'";
    }

    if($symbol == "" && $season != "") {
        $where .= "season like " . "'%$season%'";
    }

    // echo $where;
    $sql = "SELECT $columns FROM flowers";
    if($where != "") {
        $sql .= " WHERE " . $where;
    }

    $result = mysqli_query($con,$sql);
    if (!$result) {
        printf("Error: %s\n", mysqli_error($con));
        exit();
    }

    $length = 200 + (count($cols) * 130);
    echo $length;
    echo "<table style='max-width:" . $length . "px; line-height: 32px;'>
    <tr>
    $col_th
    </tr>";
    
    while($row = mysqli_fetch_array($result)) {
        echo "<tr>";

        $image = "<img src=" . $row["img"] . " class='data-img'" . ">";
        echo "<td>" . $image . "</td>";

        echo "<td>" . $row['names'] . "</td>";

        if(in_array("common_names", $cols)) {
            $common = explode(",", $row['common_names']);
            echo "<td>";
            foreach($common as $value){
                echo $value . "<br>";
            }
            echo "</td>";
        }

        if(in_array("symbolism", $cols)) {
            echo "<td>" . $row['symbolism'] . "</td>";
        }

        if(in_array("season", $cols)) {
            $season = explode(",", $row['season']);
            echo "<td>";
            foreach($season as $value){
                echo $value . "<br>";
            }
            echo "</td>";
        }

        if(in_array("maintenance", $cols)) {
            echo "<td>" . $row['maintenance'] . "</td>";
        }

        if(in_array("water", $cols)) {
            echo "<td>" . $row['water'] . "</td>";
        }

        if(in_array("sun", $cols)) {
            $sun = explode(",", $row['sun']);
            echo "<td>";
            foreach($sun as $value){
                echo $value . "<br>";
            }
            echo "</td>";
        }

        if(in_array("soil", $cols)) {
            $soil = explode(",", $row['soil']);
            echo "<td>";
            foreach($soil as $value){
                echo $value . "<br>";
            }
            echo "</td>";
        }

        echo "</tr>";
    }
    echo "</table>";
    $con->close();
?>