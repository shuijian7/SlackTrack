<!doctype html>
<?php
/**
The purpose of the code below is to handle the back end data queries to the database. It also handles creating
the table that displays grade information for the desired class within the CIS major. This page was written by 
Tyler Millan and last updated 5/12/19. This entire file is a PHP file which allows for server side scripting
allowing the calls to the database to be completed.

This page is called by the CISPopup.js file housed in the js folder. CISPopup.js passes this file the desired class name
which is then used to query the database for grade information on that specific class. The information is then displayed in an
HTML table which is passed back to the CISPopup.js file to then be displayed in the CIS.php page in the front end folder.
 *
 */
	
//Makes call to config.php which houses the variables to connect to the database
require "config.php";
//Makes calls to common.php and imports code to this location
require "common.php";

//The variables housed in config.php are passed into the PDO function which formats them to be ready to be used to connect
//to the database. This formatted connection is then stored in a variable called connection.
$connection = new PDO($dsn, $username, $password, $options);

//In CISPopup.js we pass data the class name data to this file. The below $_GET is listening for this data. If it is recieved
// we save it as a variable called course. If not an error message is returned.
if (isset($_GET['data'])){
 try {
    $course = $_GET['data'];
 }catch(PDOException $error) {
    echo $sql . "<br>" . $error->getMessage();
}
}
//The below try/catch statement attempts to connect to the database then query it for the desired classes grade information.
//If it fails, it will return the error message provided by SQL.
 try{
//The below is a SQL query that selects everything from the CIS table housed in the SlackTrack database whose course number 
//matches the one originally passed to this file which was stored at the $course variable. 
  $sql = "SELECT * FROM CIS where NUMBER= $course ORDER BY A DESC;";

//the connection variable is then combined with our above SQL query in a variable called $statement.
  $statement = $connection->prepare($sql);
//The $statement variable is then executed which connects to the database and runs the sql query once it is connected.
  $statement->execute();
//The returned class information is then stored in a variable called events, which is an array containing all the grade
//information 
  $events = $statement->fetchAll();

 } catch(PDOException $error) {
  echo $sql . "<br>" . $error->getMessage();
 }
//the percent function below, when passed a decimal value converts the value to a formatted percent value.
//i.e. input = .10, 10% would be outputted. 
function percent($number){
    return $number * 100 . '%';
}
?>
<html lang="en">

<head>
    <!-- <link rel="stylesheet" type="text/css" href="style.css"> -->
    <script src="sorttable.js"></script>

    <title>Database Test</title>
    <style>
        /* table.newtable td, table.newtable th {
        border: 2px solid white;
        border-radius: 4px;
        
        background-color: #FFFFFF;
        font-family: Arial, serif;
            
        } */
        table.newtable{
            width: 100%;

            border: 2px solid white;
        border-radius: 4px;
        
        background-color: #FFFFFF;
        font-family: Arial, serif;
        font-size: 15px;
            
        }
        table.newtable td, table.newtable th {
    /* border: 1px solid #24943A; */
        padding: 6px 10px 10px;
        }

        

    </style>
</head>

<body>
<!-- The below is an HTML table that displays our grade information that was taken in the above SQL query. -->
<table class="sortable, newtable">
	<!-- The items surrounded by <th> identifiers are the column headers for the table. -->
        <thead>
            <tr>
                <th>Instructor</th>
                <th>Percentage of A's</th>
                <th>Percentage of B's</th>
                <th>Percentage of C's</th>
                <th>Percentage of D's</th>
                <th>Percentage of F's</th>
                <th>Withdrawal Percentage</th>
                <th>Total Number of Students</th>
            </tr>
        </thead>
        <tbody>
	<!--The below foreach statement iterates through all of the grade information housed in the nested array
	that the query to the database returned. Each line of the array that is iterated through is stored in the 
	temporary value called $value.
	The element of the $value array displays the name of the instructor.

	The second element shows the percentage of total A's. It does this by summing the A plus's, A's and A minuses 
	then dividing it by the total number of students who recieved grades in the course(i.e. did not withdraw 
	from the course).This value is then rounded to the second decimal place and then passed to the percent function
	which I defined above for better formatting.

	The third element shows the percentage of total B's. It does this by summing the B plus's, B's and B minuses 
	then dividing it by the total number of students who recieved grades in the course(i.e. did not withdraw 
	from the course).This value is then rounded to the second decimal place and then passed to the percent function
	which I defined above for better formatting.

	The fourth element shows the percentage of total C's. It does this by summing the C plus's, C's and C minuses 
	then dividing it by the total number of students who recieved grades in the course(i.e. did not withdraw 
	from the course).This value is then rounded to the second decimal place and then passed to the percent function
	which I defined above for better formatting.

	The fifth element shows the percentage of total D's. It does this by summing the D plus's, D's and D minuses 
	then dividing it by the total number of students who recieved grades in the course(i.e. did not withdraw 
	from the course).This value is then rounded to the second decimal place and then passed to the percent function
	which I defined above for better formatting.

	The sixth element shows the percentage of total F's. It does this taking the total number of F's given in a course
	and dividing it by the total number of students who recieved grades in the course(i.e. did not withdraw 
	from the course).This value is then rounded to the second decimal place and then passed to the percent function
	which I defined above for better formatting.
	
	The seventh element shows the amount of total Withdrawals from the course. It does this by dividing the total number
	of W's in a course and divind it by the total number of W's and non-W's in the course.This value is then rounded to 
	the second decimal place and then passed to the percent function which I defined above for better formatting.




-->
            <?php foreach($events as $value){ ?>
            <tr>
                <td><?php echo escape($value['INSTRUCTOR']); ?></td>
                <td><?php echo escape(percent(round(($value["AP"]+$value["A"]+$value["AM"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["BP"]+$value["B"]+$value["BM"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["CP"]+$value["C"]+$value["CM"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["DP"]+$value["D"]+$value["DM"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["F"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["W"])/(($value["W"]+$value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape($value["W"]+$value["TOT_NON_W"]); ?></td>


            </tr>
<?php } ?>
        </tbody>
    </table>


</body>
</html>
	
