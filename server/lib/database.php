<?php
function connection() {
    // Realizar la conexión
    $server ='localhost:3306';
    $usuario_mysql = 'root';
    $password_mysql = '';
    $baseDeDatos = 'autos';
    
    // Crear la conexión
    $conexion = new mysqli($server, $usuario_mysql, $password_mysql, $baseDeDatos);

    return $conexion;
}
?>