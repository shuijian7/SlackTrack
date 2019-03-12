<!doctype html>

<?php
require "config.php";
require "common.php";

$connection = new PDO($dsn, $username, $password, $options);

if (isset($_GET['data'])){
 try {
    $course = $_GET['data'];
 }catch(PDOException $error) {
    echo $sql . "<br>" . $error->getMessage();
}
}

 try{
  $sql = "SELECT * FROM Theater where NUMBER= $course ORDER BY A DESC;";

  $statement = $connection->prepare($sql);
  $statement->execute();

  $events = $statement->fetchAll();

 } catch(PDOException $error) {
  echo $sql . "<br>" . $error->getMessage();
 }

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

<table class="sortable, newtable">
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
            <?php foreach($events as $value){ ?>
            <tr>
                <td><?php echo escape($value['INSTRUCTOR']); ?></td>
                <td><?php echo escape(percent(round(($value["AP"]+$value["A"]+$value["AM"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["BP"]+$value["B"]+$value["BM"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["CP"]+$value["C"]+$value["CM"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["DP"]+$value["D"]+$value["DM"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["F"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["W"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape($value["W"]+$value["TOT_NON_W"]); ?></td>


            </tr>
<?php } ?>
        </tbody>
    </table>


</body>
</html>
	