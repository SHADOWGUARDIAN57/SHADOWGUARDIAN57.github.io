// Initialize Particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100
    },
    "size": {
      "value": 2
    },
    "color": {
      "value": "#ffffff"
    },
    "opacity": {
      "value": 0.7
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "speed": 0.2
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
});

// Rocket Movement Script
document.addEventListener('DOMContentLoaded', () => {
  const rocket = document.querySelector('.rocket');
  const flame = document.querySelector('.flame');
  let isMoving = false;

  document.addEventListener('mousemove', (e) => {
    // Update rocket position
    rocket.style.left = `${e.clientX - 20}px`; // Adjust to center the rocket
    rocket.style.top = `${e.clientY - 40}px`;

    // Rotate rocket towards movement direction
    if (isMoving) {
      const deltaX = e.movementX;
      const deltaY = e.movementY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
      rocket.style.transform = `rotate(${angle}deg)`;
    }

    // Show flame when moving
    if (e.movementX !== 0 || e.movementY !== 0) {
      flame.style.opacity = '1';
      isMoving = true;
    } else {
      flame.style.opacity = '0';
      isMoving = false;
    }
  });

  // Hide flame when mouse stops moving
  document.addEventListener('mouseout', () => {
    flame.style.opacity = '0';
    isMoving = false;
  });
});
