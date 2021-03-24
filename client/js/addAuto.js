window.onload = function() {
    let body = document.querySelector('body');
    
    const titulo = 'Agregar Auto';

    const atributos = ['marca', 'modelo', 'año', 'color', 'patente'];

    const tipoDelAtributo = ['text', 'text', 'number', 'text', 'text'];

    const button1 = (e) => {
        // Save data from inputs
        let item = createAuto();

        // Get list from LS
        let lista = getFromLS('listaAutos');

        // Save item
        lista.push(item);
    
        // Save listaUsuario in LS
        saveInLS('listaAutos', lista);
        
        alert('Fue agregado exitosamente');
        
        // Move to listaGenerica.html
        window.location.href = './listaAutos.html';

        e.preventDefault();
    }

    const button2 = (e) => {
        // Move to listaAutos.html
        window.location.href = './listaAutos.html';
        
        e.preventDefault();
    }

    renderizarHTML(body, titulo, atributos, tipoDelAtributo, button1, button2);

    deleteButtons();
}

function deleteButtons(textButton1, textButton2) {
    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    
    button1.innerHTML = textButton1;
    button2.innerHTML = textButton2;
    button2.classList = classes;
}