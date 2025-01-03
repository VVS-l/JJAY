document.addEventListener('mousemove', function(e) {
    const shopText = document.querySelector('.shop-text');
    
    // Get the mouse position relative to the window
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Adjust the parallax effect intensity (change these values to make the effect stronger or weaker)
    const parallaxX = (mouseX - window.innerWidth / 2) * 0.05; // 0.05 adjusts the sensitivity for horizontal movement
    const parallaxY = (mouseY - window.innerHeight / 2) * 0.05; // 0.05 adjusts the sensitivity for vertical movement
    
    // Apply the parallax effect to the shop text
    shopText.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
});
