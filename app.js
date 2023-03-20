$('#login-form').submit(function (event) {
  event.preventDefault();

  var username = $('#username').val();
  var password = $('#pass').val();

  // check if the username and password are correct
  if (username == 'customer1' && password == 'password1') {
    window.location.href = 'customer1.html';
  }

  else if (username == 'customer2' && password == 'password2') {
    window.location.href = 'customer2.html';
  }

  else {
    alert('Invalid username or password');
  }
});