<?php
include 'lib/database.php';

// Obtener el valor de action
if (isset($_GET['action'])) {
    $valorFuncion = $_GET['action'];
} else {
    if (isset($_POST['action'])) {
        $valorFuncion = $_POST['action'];
    } else {
        die('accion no disponible');
    }
} 


switch ($valorFuncion) {
    case 'agregar': 
        agregarItem();
        break;

    case 'eliminar': 
        eliminarItem();
        break;

    case 'modificar': 
        modificarItem();
        break;

    case 'buscar': 
        buscarItem();
        break;

    case 'listar': 
        listarItems();
        break;

    default:
        die('accion no disponible');    
}


// Agregar item a la base de datos
function agregarItem() {
    $marca = $_POST['marca'];
    $modelo = $_POST['modelo'];
    $año = $_POST['año'];
    $color = $_POST['color'];
    $patente = $_POST['patente'];

    // if (validarDatos()) {
        $conexion = connection();

        if ($conexion->connect_error) {
            die('No pudo conectarse: ' . $conexion->connect_error);
        }

        $sql = "INSERT INTO autos(marca, modelo, año, color, patente) VALUES ('$marca', '$modelo', $año, '$color', '$patente')";

        $resultado = mysqli_query($conexion, $sql);

        if ($resultado) {
            volverAlCliente('ok', 'Se agregó con exito');
        } else {
            volverAlCliente('error', 'Hubo un error');
        }
    // }
}

// Eliminar item de la base de datos
function eliminarItem() {
    $patente = $_POST['patente'];

    $conexion = connection();

    if ($conexion->connect_error) {
        die('No pudo conectarse: ' . $conexion->connect_error);
    }

    $sql = "DELETE FROM autos WHERE autos.patente = '$patente'";

    $resultado = mysqli_query($conexion, $sql);

    if ($resultado) {
        volverAlCliente('ok', 'Se eliminó con exito');
    } else {
        volverAlCliente('error', 'Hubo un error');
    }

}

// Modificar item de la base de datos
function modificarItem() {
    $modelo = $_POST['modelo'];
    $marca = $_POST['marca'];
    $año = $_POST['año'];
    $color = $_POST['color'];
    $patente = $_POST['patente'];
    
    $conexion = connection();

    if ($conexion->connect_error) {
        die('No pudo conectarse: ' . $conexion->connect_error);
    }

    $sql = "UPDATE autos SET autos.marca='$marca', autos.modelo='$modelo', autos.año='$año', 
    autos.color='$color' WHERE autos.patente='$patente'";

    $resultado = mysqli_query($conexion, $sql);

    if ($resultado) {
        volverAlCliente('ok', 'Se modifico con exito');
    } else {
        volverAlCliente('error', 'Hubo un error al modificar.');
    }
}

// Buscar item en la base de datos
function buscarItem() {
    $patente = $_POST;

    // $conexion = connection();

    // if ($conexion->connect_error) {
    //     die('No pudo conectarse: ' . $conexion->connect_error);
    // }

    // $resultado = mysqli_query($conexion, "SELECT * FROM autos WHERE autos");

    echo json_encode($_POST);
}

// Return the list
function listarItems() {
    // echo json_encode($_SESSION['arrayGenerico']);
    // $conexion = connection();

    // if ($conexion->connect_error) {
    //     die('No pudo conectarse: ' . $conexion->connect_error);
    // }

    // $resultado = mysqli_query($conexion, "SELECT * FROM autos");
    
    // echo $resultado;

    // if ($resultado) {
    //     $table = 
    //     '<table class="table table-striped">
    //         <thead>
    //             <tr>
    //                 <th>ID Auto</th>
    //                 <th>Marca</th>
    //                 <th>Modelo</th>
    //                 <th>Año/th>
    //                 <th>Color/th>
    //                 <th>Patente/th>
    //             </tr>
    //         </thead>
    
    //         <tbody>
    //     ';
    
    //     foreach ($resultado as $auto) {
    //         $table .= 
    //         '<tr>
    //             <td>' . $auto['id_auto'] . '</td>
    //             <td>' . $auto['marca'] . '</td>
    //             <td>' . $auto['modelo'] . '</td>
    //             <td>' . $auto['año'] . '</td>
    //             <td>' . $auto['color'] . '</td>
    //             <td>' . $auto['patente'] . '</td>
    //         </tr>'
    //         ;
    //     }
    
    //     $table .=
    //     '
    //         </tbody>
    //     </table>
    //     ';
    
    // echo $table;
    // echo json_encode($table);
    // }
    
        // $resultadoJSON = [];
        // echo json_encode($resultadoJSON);

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
}


// Validar los datos
function validarDatos() {

}


// Retornar Resultado
function volverAlCliente($estado, $msg) {
    $valores = [
        'estado' => $estado,
        'msg' => $msg
    ];

    echo json_encode($valores);
}
?>