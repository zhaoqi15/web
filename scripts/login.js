$(document).ready(function() {
  var usernameInput = $('#username');
  var passwordInput = $('#password');

  $('#login-form').on('submit', function(event) {
    event.preventDefault();

    var enteredUsername = usernameInput.val();
    var enteredPassword = passwordInput.val();

    var storedUsers = [
      { username: 'flaviu', password: '123' },
      { username: 'juan', password: '123' },
    ];
    var foundUser = storedUsers.find(function(user) {
      return user.username === enteredUsername && user.password === enteredPassword;
    });

    if (foundUser) {
      alert('Welcome, ' + foundUser.username + '!');
    } else {
      alert('Error');
    }

    usernameInput.val('');
    passwordInput.val('');
  });
});
