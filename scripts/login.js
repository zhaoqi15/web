const logins = [
    { username: "flaviu", password: "pass1" },
    { username: "juan", password: "pass2" },
];

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const usernameInput = document.getElementsByName("username")[0];
    const passwordInput = document.getElementsByName("password")[0];
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    const matchingLogin = logins.find(function(login) {
        return login.username === username && login.password === password;
    });
    
    if (matchingLogin) {
        alert("Logged in successfully!");
    } else {
        alert("Incorrect username or password.");
    }
    
    function mostrarMensajeDeError(mensaje) {
        var mensajeDeError = document.getElementById('error-message');
        mensajeDeError.innerHTML = mensaje;
    }
    
    var botonDeInicioDeSesion = document.getElementById('boton-inicio-sesion');
    botonDeInicioDeSesion.addEventListener('click', function() {
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;
    if (usuario === 'usuario' && contrasena === 'contrasena') {
    // Los datos son correctos, continuar con el inicio de sesión
    }  else {
    // Los datos son incorrectos, mostrar mensaje de error
    mostrarMensajeDeError('Usuario o contraseña incorrectos');
  }
});
});