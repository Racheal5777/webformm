const token = localStorage.getItem('token');
if (!token) {
    window.location.href = 'login.html';
}

fetch('https://webformbackend-8.onrender.com/api/view/', {
    method: 'GET',
    headers: {
        'Authorization': `Token ${token}`,
    },
})
.then(response => response.json())
.then(data => {
    const userDetails = document.getElementById('user-details');
    data.forEach(user => {
        const userHTML = `
            <div class="user-detail">
                <img src="http:                                                                          
                <video controls>
                    <source src="http:                                                
                </video>
                <p>${user.first_name} ${user.last_name}</p>
                <p>${user.dob}</p>
                <p>${user.state}, ${user.country}</p>
            </div>
        ;//webformbackend-8.onrender.com/${user.image}" alt="${user.first_name} ${user.last_name}">
                <video controls>
                <source src="https://webformbackend-8.onrender.com/${user.video}" type="video/mp4">
                </video>
                <p>${user.first_name} ${user.last_name}</p>
                <p>${user.dob}</p>
            <p>${user.state}, ${user.country}</p>
            </div>
        `;
        userDetails.innerHTML += userHTML;
    });
})
.catch(error => console.error(error));
