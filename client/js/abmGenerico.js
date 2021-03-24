window.onload = function() {
    // debugger
    // Turn on inicioComponenteLista
    inicioComponenteLista();
}

let divTablaABM = document.getElementById('tablaABM');
let divEditaABM = document.getElementById('editaABM');


// Inicio de los componentes de lista
function inicioComponenteLista() {
    let url = '../server/abmGenerico.php?action=listar';
    const lista = getFromServer(url);
}


// Inicio de los componentes de abm
function inicioComponenteEdit(paramTitulo) {    
    const titulo = paramTitulo;

    let item = getFromLS('autoToEdit');

    const atributos = ['marca', 'modelo', 'año', 'color', 'patente'];

    const tipoDelAtributo = ['text', 'text', 'number', 'text', 'text'];

    const actualizarItem = function() {
        // Get position from LS
        const position = getFromLS('position');

        // Save data from inputs
        item = createAuto();

        // Get list from LS
        let lista = getFromLS('listaAutos');

        // Save item
        lista[position] = item;
    
        // Save listaUsuario in LS
        saveInLS('listaAutos', lista);
        
        alert('Fue modificado exitosamente');

        // Relocate
        window.location.href = './abmGenerico.html';
    }

    const altaItem = function() {    
        var formElement = document.getElementById('phpForm');
        formData = new FormData(formElement);

        fetch ('../server/abmGenerico.php?action=agregar', {
            method: 'POST',
            body: formData 
        })
        .then((response) => response.json())
        .then((data) => {
            alert(data.msg);

            // Relocate
            window.location.href = './abmGenerico.html';
        })
        .catch((err) => console.log(err))
    }

    renderizarHTML_Edit(divEditaABM, titulo, atributos, tipoDelAtributo, altaItem);
}


function initLista(lista) {    
    let divTablaABM = document.getElementById('tablaABM');

    const titulo = "Lista de Autos";

    const atributos = ['#', 'marca', 'modelo', 'año', 'color', 'patente'];

    // Add Item
    const addItem = function() {
        // Delete TablaABM
        divTablaABM.style.display = 'none';
        // divTablaABM.parentElement.remove(divTablaABM);

        // Turn on inicioComponenteEdit
        inicioComponenteEdit('Agregar Auto');

        // Remove buttons
        deleteButtons('save', 'delete');
    }

    // Modify Item
    const modifyItem = function(event) {
        // Get position of selected item
        const patente = event.target.parentElement.lastElementChild.innerText;

        // var formElement = document.getElementById('phpForm');
        // formData = new FormData(patente);

        // Fetch para buscar el auto por la patente
        fetch ('../server/abmGenerico.php?action=buscar', {
            method: 'POST'
        })
        .then((response) => response.json())
        .then((data) => {
            // alert(data.msg);
            console.log(data);

            // Relocate
            // window.location.href = './abmGenerico.html';
        })
        .catch((err) => console.log(err))

        // Disable TablaABM 
        divTablaABM.style.display = 'none';

        // Turn on inicioComponenteEdit
        inicioComponenteEdit('Editor de Autos');
        
        // Init inputs
        // initInputs();

        // Remove buttons
        deleteButtons('add', 'goBack');
    }

    renderizarHTML_Lista(divTablaABM, titulo, lista, atributos, addItem, modifyItem);
}


function initInputs() {
    // Get Item
    let item = getFromLS('autoToEdit');

    // Set attributes
    const atributos = ['marca', 'modelo', 'año', 'color', 'patente'];

    // Get list of input loaded
    let inputArray = document.querySelectorAll('input');

    // Load the info
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i].value = item[atributos[i]];
    }
} 


function deleteButtons(paramButton1, paramButton2) {
    let button1 = document.getElementById(paramButton1);
    let button2 = document.getElementById(paramButton2);
    
    button1.parentNode.removeChild(button1);
    button2.parentNode.removeChild(button2);
}