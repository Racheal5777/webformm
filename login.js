const form = document.getElementById('login-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:8000/api/login/', {
            method: 'POST',
            body: formData,
          
        });
        const data = await response.json();
        console.log(data);
        localStorage.setItem('token', data.token);
        window.location.href = 'index.html';
    } catch (error) {
        console.error(error);
    }
});
