<?php

/**
 * Configuration for database connection
 * This file is written by Shuijian Zhang and it's a temporary database for DBTest since the actual databse we used has a private key that I can't visit. 
 * he DB informations as column name and key is same with the actual DB, see in sqlcreate.txt.
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
