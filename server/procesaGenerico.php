<?php
include 'lib/database.php';

$conexion = connection();

if ($conexion->connect_error) {
    die('No pudo conectarse: ' . $conexion->connect_error);
}

$resultado = mysqli_query($conexion, "SELECT * FROM autos");

$resultadoJSON = [];

foreach ($resultado as $auto) {
    $autoCliente = [
        // 'id' => $autos['id_autos'], 
        'marca' => $auto['marca'],
        'modelo' => $auto['modelo'],
        'año' => $auto['año'],
        'color' => $auto['color'],
        'patente' => $auto['patente'],
        'duenoAnterior' => 'aaa'
    ];

    array_push($resultadoJSON, $autoCliente);
}

echo json_encode($resultadoJSON);
?>