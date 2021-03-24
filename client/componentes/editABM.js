function renderizarHTML_Edit(divEditaABM, titulo, atributos, tipoDelAtributo, paramAlta) {
    // Generar el HTML
    divEditaABM.innerHTML += getTemplateEdit(titulo, atributos, tipoDelAtributo);    


    // Event Listeners
    // Agregar
    document.getElementById('save').addEventListener('click', function() {
        paramEdit();
    });

    // Agregar
    document.getElementById('add').addEventListener('click', function(e) {
        paramAlta();
        
        e.preventDefault();
    });
    // Eliminar
}

function getTemplateEdit(titulo, atributos, tipoDelAtributo) {
    let texto = '';

    for (let i = 0; i < atributos.length; i++) {
        texto += `
            <div class="form-group">
                <label for="${atributos[i]}">${atributos[i]}</label>
                <input type="${tipoDelAtributo[i]}" name="${atributos[i]}" id="${atributos[i]}" class="form-control">
            </div>
        `;
    }


    var info = `
    <div class="container bg-white p-5">
        <h1 class="text-center mb-4">${titulo}</h1>

        <form action="../server/abmGenerico.php" class="form" method="POST" id="phpForm">
            <input type="hidden" name="funcionEjecucion" value="" id="funcionEjecucion">
            ${texto}
            
            <button id="save" class="btn btn-block btn-primary mt-5" type="button">Actualizar</button>
            <button id="delete" class="btn btn-block btn-danger mt-3" type="button">Eliminar</button>
            <button id="add" class="btn btn-block btn-primary mt-5" type="submit">Agregar</button>
            <button id="goBack" class="btn btn-block btn-secondary mt-3" type="button">Volver al Listado</button>
        </form>
    </div>
`;

return info;
}