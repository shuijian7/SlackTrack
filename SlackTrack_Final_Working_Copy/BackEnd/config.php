<?php

/**
 * This is a helper file that houses the variables for connecting to the database. 
 When called upon by the the major pages back end files, it passes variables to connect to the database. 
 Allows for greater information hiding for back end files. Written by Tyler Millan. Last Updated 05/12/2019
 
 The database we are connecting to in this is hosted on the University of Oregon CIS department's ix-dev server. 
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
