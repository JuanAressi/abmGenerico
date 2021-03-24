window.onload = function() {
    // Get user from LS
    let lsUsuario = localStorage.getItem("usuario");
    let usuario = JSON.parse(lsUsuario);
    
    // Append to HTML
    document.getElementById('usuario').innerHTML = usuario.user;
    document.getElementById('mail').innerHTML = usuario.mail;
    document.getElementById('telefono').innerHTML = usuario.tel;


    if (!usuario.admin) {
        // Change title
        document.querySelector('h1').innerHTML = "¡Bienvenido!";
    
        // Turn on button
        document.getElementById('listaAutos').style.display = "none";
    }
}

// Go to listaAutos.html
document.getElementById('listaAutos').addEventListener('click', function(e) {
    window.location.href = "./listaAutos.html";    

    e.preventDefault();
})

// LogOut
document.getElementById('logOut').addEventListener('click', function(e) {
    window.location.href = "./index.html";    

    e.preventDefault();
})