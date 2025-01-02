document.addEventListener('mousemove', (e) => {
    const mainContent = document.querySelector('.main-content');
    const title = document.querySelector('h1');
    const description = document.querySelector('.main-content p');
    const buttons = document.querySelector('.buttons-container');
    
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    
    // Apply the parallax effect to the main content, title, description, and buttons
    mainContent.style.transform = `translate(${x}px, ${y}px)`;
    title.style.transform = `translate(${x / 2}px, ${y / 2}px)`; // Slightly slower for title
    description.style.transform = `translate(${x / 3}px, ${y / 3}px)`; // Even slower for description
    buttons.style.transform = `translate(${x / 4}px, ${y / 4}px)`; // Even slower for buttons
});
