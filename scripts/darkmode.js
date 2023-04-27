/*const logins = [
    { username: "flaviu", password: "pass1" },
    { username: "juan", password: "pass2" },
    { username: "user3", password: "pass3" }
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
    
});*/

const darkmodeBtn = document.querySelector('.getcancer');
const loginIcons = document.querySelectorAll('.login-icons a');
const loginBox = document.querySelector('.login-box');
const placeholders = document.querySelectorAll('.login-box input[type="text"], .login-box input[type="password"]');


darkmodeBtn.addEventListener('click', () => {
loginIcons.forEach(icon => {
    icon.style.color = 'white';
});

loginBox.style.color = 'white';
loginBox.style.backgroundColor = 'black';
loginBox.input.style.color = 'white'
});