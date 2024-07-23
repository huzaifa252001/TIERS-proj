// Register Page Script
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('inputEmail4').value;
        const password = document.getElementById('inputPassword4').value;
  
        const user = {
          email: email,
          password: password
        };
  
        localStorage.setItem(email, JSON.stringify(user));
        alert('Registration successful!');
      });
    }
  
    // Login Page Script
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('inputEmail').value;
        const password = document.getElementById('inputPassword').value;
  
        const user = JSON.parse(localStorage.getItem(email));
  
        if (user && user.password === password) {
          alert('Login successful!');
        } else {
          alert('Invalid email or password.');
        }
      });
    }
  });
  