// Login functionality
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username && password) {
        // Here you would typically send these credentials to a server for verification
        // For this example, we'll just log to the console and simulate a successful login
        console.log('Login attempt:', { username, password });
        
        // Simulating successful login
        alert('Login successful!');
        
        // You might want to redirect the user or update the UI here
        // For example:
        // window.location.href = 'dashboard.html';
    } else {
        alert('Please enter both username and password.');
    }
}

// Add event listener to login form
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            login();
        });
    }
});
