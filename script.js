// Smooth Scroll for Navigation Links
document.querySelectorAll('.menu-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Dynamic Header Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#005bb5';
        header.style.transition = 'background-color 0.3s';
    } else {
        header.style.backgroundColor = '#0073e6';
    }
});

// Interactive Map Placeholder
const mapPlaceholder = document.getElementById('map-placeholder');
mapPlaceholder.addEventListener('click', () => {
    mapPlaceholder.innerHTML = '<p>Loading map...</p>';
    mapPlaceholder.style.background = '#fff';

    // Simulate map loading (replace this with an actual map API)
    setTimeout(() => {
        mapPlaceholder.innerHTML = '<p>Your interactive map will appear here!</p>';
        mapPlaceholder.style.background = '#eef';
    }, 2000);
});

// Floating Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.setAttribute('id', 'back-to-top');
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.backgroundColor = '#0073e6';
backToTopButton.style.color = 'white';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

// Show Back-to-Top Button on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to Top Functionality
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Submission Alert
const contactForm = document.querySelector('.contact-section form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will respond to your message shortly.');
        contactForm.reset();
    });
}
