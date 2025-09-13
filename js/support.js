document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.support-content form');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form input
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();

        if (email === '' || message === '') {
            // Prompt the user to fill out all fields
            alert('Please fill out all fields before submitting.');
            return;
        }

        // Disable submit button temporarily to prevent multiple submissions
        submitButton.disabled = true;

        // Simulate a delay to mimic server processing
        setTimeout(function() {
            // Enable submit button after delay
            submitButton.disabled = false;

            // Display success message
            const successMessage = document.createElement('p');
            successMessage.textContent = "Your message has been sent successfully!";
            successMessage.classList.add('success-message');
            form.appendChild(successMessage);

            // Remove success message after a delay
            setTimeout(function() {
                successMessage.remove();
            }, 2000); // Remove message after 2 seconds
        }, 1000); // Simulate 1 second delay
    });
});
