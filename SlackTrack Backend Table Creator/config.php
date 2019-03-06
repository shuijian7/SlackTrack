<?php

/**
 * This is a helper file that houses the variables for connecting to the database. When called upon by the index.php file, it passes these variables. Allows for greater information hiding for index file. Written by Tyler Millan.
 */

$host       = "ix.cs.uoregon.edu";
$port       = "3074";
$username   = "tylerm";
$password   = "tylerm";
$dbname     = "slacktrack";
    $dsn        = "mysql:host=$host;port=$port;dbname=$dbname";
$options    = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
              );
