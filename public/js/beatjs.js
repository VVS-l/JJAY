// Function to open the modal for a specific beat
function openDetails(beatId) {
    const modal = document.getElementById(`details-modal-${beatId}`);
    modal.classList.remove("hidden");
    modal.classList.remove("closing"); // Ensure it's reset before opening
}

// Function to close the modal for a specific beat
function closeDetails(beatId) {
    const modal = document.getElementById(`details-modal-${beatId}`);
    modal.classList.add("closing"); // Add class for fade-out animation
    setTimeout(() => {
        modal.classList.add("hidden"); // Hide the modal after the animation ends
    }, 500); // Duration of the animation
}

document.addEventListener("mousemove", function (e) {
    // Get the container and modal elements
    const parallaxElements = [document.querySelector('.container'), document.querySelector('.details-modal')];
    const movementStrength = 20; // Adjust the strength of the parallax effect
    const width = window.innerWidth;
    const height = window.innerHeight;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate the movement for X and Y axis
    const moveX = (mouseX - width / 2) / width * movementStrength;
    const moveY = (mouseY - height / 2) / height * movementStrength;

    // Apply the parallax effect to both the container and the modal window
    parallaxElements.forEach(function(parallaxElement) {
        if (parallaxElement) {
            window.requestAnimationFrame(function() {
                parallaxElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        }
    });

    // Prevent scrollbars from appearing by controlling overflow behavior in the body
    document.body.style.overflow = "hidden";
});

document.addEventListener("mouseleave", function () {
    document.body.style.overflow = "auto"; // Restore normal scrolling when mouse leaves
});
