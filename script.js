document.getElementById('Signup').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const Cpassword = document.getElementById('Cpassword').value;
    // Generate a random access token
    const accessToken = generateAccessToken();
    
    // Save user state in local storage

    const userState = {
        username,
        password,
        Cpassword,
        email,
        accessToken
    };
    localStorage.setItem('userState', JSON.stringify(userState));

    // Show success message
    if(userState.username!='' && userState.Cpassword!='' && userState.password!='' && userState.email!='' && userState.Cpassword==userState.password){
        document.getElementById('Smessage').textContent = 'Signup successful. Redirecting...';
        setTimeout(() => {
            window.location.href ='profile/index.html';
        }, 2000);
    }else{
        document.getElementById('emsg').textContent='Error: All fields are mandatory and enter correct values.'
    }
    
    
    
   
});



function generateAccessToken() {
    const accessTokenLength = 16;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let accessToken = '';
    for (let i = 0; i < accessTokenLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        accessToken += characters.charAt(randomIndex);
    }
    return accessToken;
}