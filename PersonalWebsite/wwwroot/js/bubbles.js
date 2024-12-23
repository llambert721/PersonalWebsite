const bubbleContainer = document.getElementById('bubble-container');
const bubbleCount = 20; // Number of bubbles

// Create bubbles
for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random size and initial position
    const size = Math.random() * 60 + 20; // Bubble size between 20px and 80px
    const x = Math.random() * window.innerWidth; // Random initial X position
    const y = Math.random() * window.innerHeight; // Random initial Y position
    const velocityX = (Math.random() - 0.5) * 2; // Random horizontal velocity
    const velocityY = (Math.random() - 0.5) * 2; // Random vertical velocity

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    // Store initial velocity in custom data attributes
    bubble.dataset.velocityX = velocityX;
    bubble.dataset.velocityY = velocityY;

    bubbleContainer.appendChild(bubble);
}

// Animation loop to move bubbles
function animateBubbles() {
    document.querySelectorAll('.bubble').forEach((bubble) => {
        const rect = bubble.getBoundingClientRect();
        let x = parseFloat(bubble.style.left);
        let y = parseFloat(bubble.style.top);

        // Update position based on velocity
        x += parseFloat(bubble.dataset.velocityX);
        y += parseFloat(bubble.dataset.velocityY);

        // Keep bubbles within screen bounds, wrap around if necessary
        if (x <= 0 || x >= window.innerWidth - rect.width) {
            bubble.dataset.velocityX = -parseFloat(bubble.dataset.velocityX);
        }
        if (y <= 0 || y >= window.innerHeight - rect.height) {
            bubble.dataset.velocityY = -parseFloat(bubble.dataset.velocityY);
        }

        // Apply new position
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
    });

    requestAnimationFrame(animateBubbles);
}

// Start bubble animation
animateBubbles();

