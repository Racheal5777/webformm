const token = localStorage.getItem('token');
if (!token) {
    window.location.href = 'login.html';
}

fetch('http://localhost:8000/api/view/', {
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
        ;//localhost:8000${user.image}" alt="${user.first_name} ${user.last_name}">
                <video controls>
                <source src="http://localhost:8000${user.video}" type="video/mp4">
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
