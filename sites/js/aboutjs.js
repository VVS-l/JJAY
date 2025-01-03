document.addEventListener('mousemove', (e) => {
    const mainContent = document.querySelector('.main-content');
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    mainContent.style.transform = `translate(${x}px, ${y}px)`;
});
