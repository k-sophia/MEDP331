<?php
    if(isset($_POST['date'])){
        $date = $_POST['date'];
    }

    if(isset($_POST['dayOfWeek'])){
        $dayOfWeek = $_POST['dayOfWeek'];
    }

    $goal = '';
    $urgent = '';
    $task1 = '';
    $task2 = '';
    $task3 = '';
    $task4 = '';
    $task5 = '';
    $appointments = '';
    $notes = '';

    if($dayOfWeek == 'monday') {
        $goal = 'get a head start on weeks assignments';
        $urgent = 'project due TOMORROW T^T';
        $task1 = 'math hw';
        $task2 = 'music readings';
        $task3 = 'apply for internship';
        $task4 = '';
        $task5 = '';
        $appointments = '3:45PM eye exam';
        $notes = 'No Notes';
    }

    echo <<<END
        <h3 id="date">DATE: {$date}</h3>
        <h3 id='dayOfWeek'>DATE: $dayOfWeek Schedule</h3>
        <div id="day-plan">
            <div id="goal-container" class="container">
                <h3>GOAL FOR TODAY</h3>
                <p>$goal</p>
            </div>
            <div id="urgent-container" class="container">
                <h3>URGENT</h3>
                <p>$urgent</p>
            </div>
            <div id="tasks-container" class="container">
                <h3>TASK LIST</h3>
                <ul>
                    <li>$task1</li>
                    <li>$task2</li>
                    <li>$task3</li>
                    <li>$task4</li>
                    <li>$task5</li>
                </ul>
            </div>
            <div id="appointments-container" class="container">
                <h3>APPOINTMENTS</h3>
                <p>$appointments</p>
            </div>
            <div id="notes-container" class="container">
                <h3>NOTES</h3>
                <p>$notes</p>
            </div>
        </div>
    END;
?>