document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for Get Started button
    const getStartedBtn = document.querySelector('.hero button');
    if(getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Show success message after form submit
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.get('status') === 'success') {
        alert('✅ Thank you for signing up! We will contact you soon.');
    }
});
