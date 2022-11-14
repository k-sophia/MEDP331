<?php
    if(isset($_POST['date'])){
        $date = $_POST['date'];
    }

    if(isset($_POST['dayOfWeek'])){
        $dayOfWeek = $_POST['dayOfWeek'];
    }

    $goal = array(
        'get a head start on weeks assignments', 
        'hang out with friends :)', 
        'nothing', 
        'try to make it till weekend', 
        'take a long rest', 
        'have fun XD', 
        'get up early tomorrow'
    );

    $urgent = array(
        'project due TOMORROW T^T', 
        'buy birthday gift for Nafi', 
        'HACKATHON CHECK IN @ 2', 
        'nothing :)', 
        'exam @ 5', 
        'nothing :)', 
        'apply for graduation'
    );

    $task1 = array(
        'math hw', 
        'music readings', 
        'study for exam', 
        'pick up package', 
        '', 
        'meditate', 
        ''
    );
    
    $task2 = array(
        'music readings', 
        'update personal website', 
        'bake for fund raiser', 
        'grocery shopping', 
        '', 
        '', 
        ''
    );

    $task3 = array(
        'medp assignment', 
        'capstone task', 
        'clean fish tank', 
        '', 
        '', 
        '', 
        ''
    );

    $task4 = array(
        'exercise', 
        '', 
        'interview prep', 
        '', 
        '', 
        '', 
        ''
    );
    $task5 = array(
        '', 
        '', 
        '', 
        '', 
        '', 
        '', 
        ''
    );

    $appointments = array(
        '3:45PM eye exam', 
        '9AM club meeting <br> 4PM hackathon project meeting', 
        'nothing :)', 
        '5:45PM Fund Raiser', 
        'nothing :)', 
        '12:30PM dentist', 
        '2PM escpae room <br> 6:30PM Birthday Party!!!! <br>'
    );

    $notes = array(
        'No Notes', 
        'bring identification to meeting', 
        'nafi likes cats ^-^', 
        'bring food labels to fund raiser', 
        'No Notes', 
        'No Notes', 
        'reserve extra tickets for graduation'
    );

    $dayList = array('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');
    $num = array_search($dayOfWeek, $dayList);
    if($num === false) {
        echo <<<END
            <div id="day-plan">
                <div id="goal-container" class="container">
                    <h3>INVALID INPUT</h3>
                    <p>enter a valid week day</p>
                </div>
            </div>
        END;
    }
    else {
        echo <<<END
            <h3 id="date">date: {$date}</h3>
            <h3 id='dayOfWeek'>$dayOfWeek schedule</h3>
            <div id="day-plan">
                <div id="goal-container" class="container">
                    <h3>GOAL FOR TODAY</h3>
                    <p>$goal[$num]</p>
                </div>
                <div id="urgent-container" class="container">
                    <h3>URGENT</h3>
                    <p>$urgent[$num]</p>
                </div>
                <div id="tasks-container" class="container">
                    <h3>TASK LIST</h3>
                    <ul>
                        <li>$task1[$num]</li>
                        <li>$task2[$num]</li>
                        <li>$task3[$num]</li>
                        <li>$task4[$num]</li>
                        <li>$task5[$num]</li>
                    </ul>
                </div>
                <div id="appointments-container" class="container">
                    <h3>APPOINTMENTS</h3>
                    <p>$appointments[$num]</p>
                </div>
                <div id="notes-container" class="container">
                    <h3>NOTES</h3>
                    <p>$notes[$num]</p>
                </div>
            </div>
        END;
    }


?>