<?php

function conectar (){

    $usuario="david";
    $pass="D72051655p*";
    $server="localhost";
    $db="estadstica";
    $conn=mysql_connect($server, $usuario, $pass) or die ("Error al conectar a la base de datos ".msqyl_error());

    mysql_select_db($db,$conn);

    return $conn;
}
?>