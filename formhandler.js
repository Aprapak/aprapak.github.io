// Wait until the DOM is fully loaded
window.onload = function() {
    const form = document.getElementById('contactForm');

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const collab = document.querySelector('input[name="collab"]:checked')?.value || '';
        const interest = document.getElementById('interest').value;
        const subscribe = document.getElementById('subscribe').checked;
        const message = document.getElementById('message').value;
        
        // Get selected contact times
        const contactTimes = Array.from(document.querySelectorAll('input[name="contactTime"]:checked'))
            .map(input => input.value);

        // Save form data to local storage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('collab', collab);
        localStorage.setItem('interest', interest);
        localStorage.setItem('subscribe', subscribe);
        localStorage.setItem('contactTimes', JSON.stringify(contactTimes));
        localStorage.setItem('message', message);

        alert('Your information has been saved!');
        form.reset(); // Clear the form
    });

    // Handle form reset
    form.addEventListener('reset', function() {
        localStorage.clear(); // Clear local storage
        alert('All input has been cleared.');
    });
};

