document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector('body');
    const contactSection = document.querySelector('#contact');
    
    // Calculate the distance to the contact section
    const contactSectionTop = contactSection.getBoundingClientRect().top + window.scrollY;

    for (let i = 0; i < 10; i++) { // Increase the number of lines
        const line = document.createElement('div');
        line.className = 'line';

        const height = Math.random() * 100 + 200; // Random height between 200px and 300px
        const position = Math.random() * 100; // Random position across the screen
        const delay = Math.random() * 5; // Random delay before animation starts
        const duration = Math.random() * 15 + 15; // Random animation duration between 15s and 30s

        line.style.height = `${height}px`;
        line.style.left = `${position}vw`;
        line.style.animationDelay = `${delay}s`;
        line.style.animationDuration = `${duration}s`;
        
        // Adjust animation to stop at the contact section
        line.style.setProperty('--drop-height', `${contactSectionTop}px`);

        body.appendChild(line);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
