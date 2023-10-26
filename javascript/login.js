document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you can add your validation logic. For example:
    if (username === 'test' && password === '1234') {
        window.location.href = 'menu.html';
    } else {
        alert('Username or password is incorrect');
    }
});