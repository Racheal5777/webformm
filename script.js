const form = document.getElementById('user-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('first_name', document.getElementById('first_name').value);
    formData.append('last_name', document.getElementById('last_name').value);
    formData.append('dob', document.getElementById('dob').value);
    formData.append('state', document.getElementById('state').value);
    formData.append('country', document.getElementById('country').value);
    formData.append('image', document.getElementById('image').files[0]);
    formData.append('video', document.getElementById('video').files[0]);

    try {
        const response = await fetch('http://webformbackend-8.onrender.com/api/submit/', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        console.log(data);
        alert('Submission Successful🎉');
    } catch (error) {
        console.error(error);
    }
});
