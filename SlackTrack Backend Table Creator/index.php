<!doctype html>

<?php
require "config.php";
require "common.php";

$connection = new PDO($dsn, $username, $password, $options);

 try {

  $sql = "SELECT * FROM CIS";

  $statement = $connection->prepare($sql);
  $statement->execute();

  $events = $statement->fetchAll();

 } catch(PDOException $error) {
  echo $sql . "<br>" . $error->getMessage();
 }

try {

  $sql = "SELECT * FROM Journalism";

  $statement = $connection->prepare($sql);
  $statement->execute();

  $j = $statement->fetchAll();

 } catch(PDOException $error) {
  echo $sql . "<br>" . $error->getMessage();
 }

 try {

  $sql = "SELECT * FROM Philosophy";

  $statement = $connection->prepare($sql);
  $statement->execute();

  $philo = $statement->fetchAll();

 } catch(PDOException $error) {
  echo $sql . "<br>" . $error->getMessage();
 }


 try {

  $sql = "SELECT * FROM Theater";

  $statement = $connection->prepare($sql);
  $statement->execute();

  $theater = $statement->fetchAll();

 } catch(PDOException $error) {
  echo $sql . "<br>" . $error->getMessage();
 }
function percent($number){
    return $number * 100 . '%';
}
?>
<html lang="en">

<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="sorttable.js"></script>

	<title>Database Test</title>
</head>

<body>
<h1>CIS</h1>
<table class="sortable">
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
            <?php foreach($events as $value){
                if ($value[NUMBER] == 415){?>
            <tr>
                <td><?php echo escape($value[INSTRUCTOR]); ?></td>
                <td><?php echo escape(percent(round(($value[AP]+$value[A]+$value[AM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[BP]+$value[B]+$value[BM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[CP]+$value[C]+$value[CM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[DP]+$value[D]+$value[DM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[F])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[W])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape($value[W]+$value[TOT_NON_W]); ?></td>


            </tr>
<?php }} ?>
        </tbody>
    </table>

<h1>Journalism</h1>
<table class="sortable">
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
            <?php foreach($j as $value){
                if ($value[NUMBER] == 100){?>
            <tr>
                <td><?php echo escape($value[INSTRUCTOR]); ?></td>
                <td><?php echo escape(percent(round(($value[AP]+$value[A]+$value[AM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[BP]+$value[B]+$value[BM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[CP]+$value[C]+$value[CM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[DP]+$value[D]+$value[DM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[F])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[W])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape($value[W]+$value[TOT_NON_W]); ?></td>


            </tr>
<?php }} ?>
        </tbody>
    </table>

<h1>Philosophy</h1>
<table class="sortable">
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
            <?php foreach($philo as $value){
                if ($value[NUMBER] == 101){?>
            <tr>
                <td><?php echo escape($value[INSTRUCTOR]); ?></td>
                <td><?php echo escape(percent(round(($value[AP]+$value[A]+$value[AM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[BP]+$value[B]+$value[BM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[CP]+$value[C]+$value[CM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[DP]+$value[D]+$value[DM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[F])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[W])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape($value[W]+$value[TOT_NON_W]); ?></td>


            </tr>
<?php }} ?>
        </tbody>
    </table>


<h1>Theater</h1>
<table class="sortable">
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
            <?php foreach($theater as $value){
                if ($value[NUMBER] == 101){?>
            <tr>
                <td><?php echo escape($value[INSTRUCTOR]); ?></td>
                <td><?php echo escape(percent(round(($value[AP]+$value[A]+$value[AM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[BP]+$value[B]+$value[BM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[CP]+$value[C]+$value[CM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[DP]+$value[D]+$value[DM])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[F])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape(percent(round(($value[W])/($value[TOT_NON_W]),2))); ?></td>
                <td><?php echo escape($value[W]+$value[TOT_NON_W]); ?></td>
            </tr>
<?php }} ?>
        </tbody>
    </table>

</body>
</html>
