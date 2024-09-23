document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Call login API or authenticate user
    console.log('Login attempted:', email, password);
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email-reg').value;
    const password = document.getElementById('password-reg').value;
    // Call register API or create new user
    console.log('Registration attempted:', name, email, password);
});