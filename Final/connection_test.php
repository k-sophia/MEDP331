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
    
    while($row = mysqli_fetch_array($result)) {
        $return .= "<tr>";

        $image = "<img src=" . $row["img"] . " class='data-img'" . ">";
        $return .= "<td>" . $image . "</td>";

        $return .= "<td>" . $row['names'] . "</td>";

        if(isset($_POST['cols'])){
            if(in_array("common_names", $cols)) {
                $common = explode(",", $row['common_names']);
                $return .= "<td>";
                foreach($common as $value){
                    $return .= $value . "<br>";
                }
                $return .= "</td>";
            }
    
            if(in_array("symbolism", $cols)) {
                $return .= "<td>" . $row['symbolism'] . "</td>";
            }
    
            if(in_array("season", $cols)) {
                $season = explode(",", $row['season']);
                $return .= "<td>";
                foreach($season as $value){
                    $return .= $value . "<br>";
                }
                $return .= "</td>";
            }
    
            if(in_array("maintenance", $cols)) {
                $return .= "<td>" . $row['maintenance'] . "</td>";
            }
    
            if(in_array("water", $cols)) {
                $return .= "<td>" . $row['water'] . "</td>";
            }
    
            if(in_array("sun", $cols)) {
                $sun = explode(",", $row['sun']);
                $return .= "<td>";
                foreach($sun as $value){
                    $return .= $value . "<br>";
                }
                $return .= "</td>";
            }
    
            if(in_array("soil", $cols)) {
                $soil = explode(",", $row['soil']);
                $return .= "<td>";
                foreach($soil as $value){
                    $return .= $value . "<br>";
                }
                $return .= "</td>";
            }   
        }

        $return .= "</tr>";
    }

    if(mysqli_fetch_array($result) == "") {
        $return .= "<tr><td class='no-data' colspan='$col_count'>No Data Found</td></tr>";
    }

    $return .= "</table>";

    echo $return;
    $con->close();
?>