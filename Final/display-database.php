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

    if(isset($_POST['maintenance'])){
        $maintenance = $_POST['maintenance'];
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
    $col_count = 2;
    $col_th = "
        <th>image</th>
        <th>name</th>";

    if(isset($_POST['cols'])){
        foreach ($cols as $value) {
            $columns .= ", $value";
            $col_count += 1;

            if($value == "common_names") {
                $col_th .= "<th>common names</th>";
            }
            else {
                $col_th .= "<th>$value</th>";
            }
        }
    }

    $where = "";
    $prior = false;

    if($symbol != "") {
        $where .= "symbolism like " . "'%$symbol%'";
        $prior = true;
    }

    if($season != "") {
        if($prior) {
            $where .= " AND season like " . "'%$season%'";
        }
        else {
            $where .= "season like " . "'%$season%'";
        }
        $prior = true;
    }
    if($maintenance != "") {
        if($prior) {
            $where .= " AND maintenance = " . "'$maintenance'";
        }
        else {
            $where .= "maintenance  = " . "'$maintenance'";
        }
        $prior = true;
    }
    $prior = false;

    // echo $where;
    $sql = "SELECT $columns FROM flowers";
    if($where != "") {
        $sql .= " WHERE " . $where;
    }
    $sql .= " ORDER BY names";

    $result = mysqli_query($con,$sql);
    if (!$result) {
        printf("Error: %s\n", mysqli_error($con));
        exit();
    }

    $length = 400 + (($col_count - 2) * 150);
    // echo $length;
    $return = "<table style='max-width:" . $length . "px; line-height: 32px;'>
    <tr>
    $col_th
    </tr>";
    
    $database = "";
    while($row = mysqli_fetch_array($result)) {
        $database .= "<tr>";

        $image = "<img src=" . $row["img"] . " class='data-img'" . ">";
        $database .= "<td>" . $image . "</td>";

        $database .= "<td>" . $row['names'] . "</td>";

        if(isset($_POST['cols'])){
            if(in_array("common_names", $cols)) {
                $common = explode(",", $row['common_names']);
                $database .= "<td>";
                foreach($common as $value){
                    $database .= $value . "<br>";
                }
                $database .= "</td>";
            }
    
            if(in_array("symbolism", $cols)) {
                $database .= "<td>" . $row['symbolism'] . "</td>";
            }
    
            if(in_array("season", $cols)) {
                $season = explode(",", $row['season']);
                $database .= "<td>";
                foreach($season as $value){
                    $database .= $value . "<br>";
                }
                $database .= "</td>";
            }
    
            if(in_array("maintenance", $cols)) {
                $database .= "<td>" . $row['maintenance'] . "</td>";
            }
    
            if(in_array("water", $cols)) {
                $database .= "<td>" . $row['water'] . "</td>";
            }
    
            if(in_array("sun", $cols)) {
                $sun = explode(",", $row['sun']);
                $database .= "<td>";
                foreach($sun as $value){
                    $database .= $value . "<br>";
                }
                $database .= "</td>";
            }
    
            if(in_array("soil", $cols)) {
                $soil = explode(",", $row['soil']);
                $database .= "<td>";
                foreach($soil as $value){
                    $database .= $value . "<br>";
                }
                $database .= "</td>";
            }   
        }

        $database .= "</tr>";
    }

    if($database == "") {
        $return .= "<tr><td class='no-data' colspan='$col_count'>No Data Found</td></tr>";
    }
    else {
        $return .= $database;
    }

    $return .= "</table>";

    echo $return;
    $con->close();
?>