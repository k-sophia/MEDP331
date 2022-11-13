<?php
    // $color = $_POST['color'];

    $color;
    if($_POST['color'] == '') {
        $color = '#000000'
    }
    else {
        $color = $_POST['color'];
    }

    echo "<div style='background-color:$color' class='color-box'></div>";
    echo "<p class='output'>hex : $color</p>";

    list($r, $g, $b) = sscanf($color, "#%02x%02x%02x");
    echo "<p class='output'>rgb : $r $g $b</p>";

    $oldR = $r;
    $oldG = $g;
    $oldB = $b;


    // RGB to HSL
    $r /= 255;
    $g /= 255;
    $b /= 255;

    $max = max( $r, $g, $b );
    $min = min( $r, $g, $b );

    $h;
    $s;
    $l = ( $max + $min ) / 2;
    $d = $max - $min;

    if( $d == 0 ){
        $h = $s = 0; // achromatic
    } else {
        $s = $d / ( 1 - abs( 2 * $l - 1 ) );

        switch( $max ){
            case $r:
                $h = 60 * fmod( ( ( $g - $b ) / $d ), 6 ); 
                if ($b > $g) {
                    $h += 360;
                }
                break;

            case $g: 
                $h = 60 * ( ( $b - $r ) / $d + 2 ); 
                break;

            case $b: 
                $h = 60 * ( ( $r - $g ) / $d + 4 ); 
                break;
        }			        	        
    }

    $h = round( $h, 2 );
    $s = round( $s, 2 );
    $l = round( $l, 2 );
    echo "<p class='output'>hsl : $h $s $l</p>";


    // RGB to HSB
    $R = ($oldR / 255);
    $G = ($oldG / 255);
    $B = ($oldB / 255);
    $maxRGB = max($R, $G, $B);
    $minRGB = min($R, $G, $B);
    $chroma = $maxRGB - $minRGB;
    $computedV = 100 * $maxRGB;
    if ($chroma == 0)
        return array(0, 0, $computedV);

    $computedS = 100 * ($chroma / $maxRGB);
    if ($R == $minRGB)
        $h = 3 - (($G - $B) / $chroma);
    elseif ($B == $minRGB)
        $h = 1 - (($R - $G) / $chroma);
    else // $G == $minRGB
        $h = 5 - (($B - $R) / $chroma);

    $computedH = 60 * $h;
    
    $computedH = round( $computedH, 2 );
    $computedS = round( $computedS, 2 );
    $computedV = round( $computedV, 2 );
    echo "<p class='output'>hsv : $computedH $computedS $computedV</p>";


    // RGB to CMYK
    $t = $oldR;
    $g = $oldG;
    $b = $oldB;
    $cyan = 1 - $r/255;
    $magenta = 1 - $g/255;
    $yellow = 1 - $b/255;
    $black = min($cyan, $magenta, $yellow);
    $cyan = @round(($cyan - $black) / (1 - $black) * 100);
    $magenta = @round(($magenta - $black) / (1 - $black) * 100);
    $yellow = @round(($yellow - $black) / (1 - $black) * 100);
    $black = round($black * 100);
    echo "<p class='output'>cmyk : $cyan $magenta $yellow $black</p>";
?>

<!-- 
$number = false;
if(isset($_POST['number'])){
    $number = $_POST['number'];
}
 
echo 'Your number is: ' . $number."<br/>";
echo "Meters : $number<br/>";
echo "Cm : ".($number*100)."<br/>";
echo "Foot : ".($number*3.28084)."<br/>";
echo "Inches : ".($number*39.3701)."<br/>"; -->