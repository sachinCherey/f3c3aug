const userState = JSON.parse(localStorage.getItem('userState'));
const usernameElement = document.getElementById('username');
const Email=document.getElementById('email');
const Password=document.getElementById('password');
usernameElement.textContent = userState.username;
Email.textContent=userState.email;
Password.textContent=userState.password;

document.getElementById('logout-btn').addEventListener('click', () => {
    // Clear user state and access token from local storage
    localStorage.removeItem('userState');
    
    // Redirect to signup page
    window.location.href = '/index.html';
});

// Protect profile page from unauthorized access
if (!userState || !userState.accessToken) {
    window.location.href = '/index.html';
}