document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store user data in sessionStorage
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('isAdmin', 'false'); // Users are not admins

    alert('Registration successful! ');
    window.location.href = 'index.html';
});
