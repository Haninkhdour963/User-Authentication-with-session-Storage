
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = sessionStorage.getItem('username');
    const storedPassword = sessionStorage.getItem('password');
    
    // Hardcoded admin credentials
    const adminUsername = 'admin'; 
   
    const adminPassword = 'admin123'; 
    const isAdmin = (username === adminUsername && password === adminPassword);

    // Validate the user credentials
    if ((username === storedUsername && password === storedPassword) || isAdmin) {
        alert('Login successful!');
        sessionStorage.setItem('isLoggedIn', 'true'); // Set logged in status

        // Redirect based on user role
        if (isAdmin) {
            sessionStorage.setItem('isAdmin', 'true'); // Set admin status
            window.location.href = 'admin.html'; // Redirect to admin page
        } else {
            sessionStorage.setItem('isAdmin', 'false');
            window.location.href = 'index.html'; // Redirect to user page
        }
    } else {
        alert('Invalid credentials. Please try again.');
        window.location.href = 'register.html'; // Redirect to registration
    }
});
