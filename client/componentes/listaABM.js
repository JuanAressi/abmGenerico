function renderizarHTML_Lista(divTablaABM, titulo, lista, atributos, addItem, modifyItem) {
    // Generar el HTML
    divTablaABM.innerHTML += getTemplateLista(titulo, lista, atributos, addItem, modifyItem);

    // Añadir Item
    document.getElementById('addItem').addEventListener('click', function() {
        addItem();
    });

    // Modificar Item
    document.querySelector('tbody').addEventListener('click', function(event) {
        modifyItem(event);
    });
}

function getTemplateLista(parTitulo, parLista, parAtributos) {
    let texto = '';
    let list = '';

    // Set head of the table
    for (let i = 0; i < parAtributos.length; i++) {
        texto += `
            <th scope="col">${parAtributos[i]}</th>            
        `;
    }
    
    // Set items of the table
    let indice = 1;

    parLista.forEach(item => {
        list += `  
            <tr>
        `;

        for (let i = 0; i < parAtributos.length; i++) {
            if (i == 0) {
                list += `
                    <td class="bold">${indice}</td>
                `;
            } else {
                list += `
                    <td>${item[parAtributos[i]]}</td>
                `;
            }
        }
        
        list += `
            </tr>
        `;

        indice++;
    });


    var info = `
    <div class="container bg-white p-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <button class="btn btn-secondary">
                <i class="far fa-arrow-left"></i>
            </button>

            <h1 class="text-center">${parTitulo}</h1>

            <button id="addItem" class="btn btn-success">
                <i class="far fa-plus"></i>
            </button>
        </div>

        <table class="table table-striped">
            <thead>
                <tr>
                    ${texto}
                </tr>
            </thead>
            <tbody>
                ${list}
            </tbody>
        </table>
    </div>
`;

return info;
}