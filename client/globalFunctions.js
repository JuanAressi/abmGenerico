function createUser() {  
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('contraseña').value;
    const mail = document.getElementById('mail').value;
    const tel = document.getElementById('telefono').value;
    const admin = document.getElementById('admin').checked;

    let usuario = {
        user,
        pass,
        mail,
        tel,
        admin 
    }

    return usuario;
}

function usuarioExistente(usuario, listaUsuario) {
    let exist = false;

    listaUsuario.forEach(user => {
        if (user.user == usuario.user) {
            exist = true;
        }
    });

    return exist;
}

function getListOfElements(key) {
    let lsLista = localStorage.getItem(key);
    let lista;

    if (lsLista) {
        lista = JSON.parse(lsLista);
    } else {
        lista = [];
        localStorage.setItem(key, JSON.stringify(lista));
    }
    
    return lista;
}

function getFromLS(key) {
    let lsItem = localStorage.getItem(key);
    let item = JSON.parse(lsItem);

    return item;
}

function saveInLS(text, item) {
    localStorage.setItem(text, JSON.stringify(item));
}

function createAuto() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const año = document.getElementById('año').value;
    const color = document.getElementById('color').value;
    const patente = document.getElementById('patente').value;

    let auto = {
        marca,
        modelo,
        año,
        color,
        patente 
    }

    return auto;
}


// Get data from server
function getFromServer(url) {
    fetch (url, {
        method: 'GET'
    })
    .then(function(response) {
        if(response.ok) {
            return response.json();
        } else {
            throw "Error en la llamada Ajax";
        }
    })
    .then(function(lista) {   
        console.log(lista);     
        initLista(lista);  
    })
    .catch(function(err) {
        console.log(err);
    });
}


// Save item in session
function saveInSession(url) {
    fetch (url)
    .then(function(response) {
        if(response.ok) {
            return response.json();
        } else {
            throw "Error en la llamada Ajax";
        }
    })
    .then(function(lista) {        
        // initLista(lista);  
    })
    .catch(function(err) {
        console.log(err);
    });
}