<?php

/**
 * Configuration for database connection
 * This file is written by Shuijian Zhang and it's a database configuration for DBTest  
 * The informations for test table are in sqlcreate.txt.
 */

$host       = "ix.cs.uoregon.edu";
$port       = "3088";
$username   = "tylerm";
$password   = "tylerm";
$dbname     = "slacktrack";
    $dsn        = "mysql:host=$host;port=$port;dbname=$dbname";
$options    = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
              );

?>
