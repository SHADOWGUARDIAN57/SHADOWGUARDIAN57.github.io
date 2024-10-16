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
  let lastX = null;
  let lastY = null;

  document.addEventListener('mousemove', (e) => {
    // Update rocket position
    rocket.style.left = `${e.clientX - 20}px`; // Adjust to center the rocket
    rocket.style.top = `${e.clientY - 40}px`;

    // Calculate movement direction
    if (lastX !== null && lastY !== null) {
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
      rocket.style.transform = `rotate(${angle}deg)`;

      // Show flame when moving
      if (deltaX !== 0 || deltaY !== 0) {
        flame.style.opacity = '1';
      } else {
        flame.style.opacity = '0';
      }
    }

    lastX = e.clientX;
    lastY = e.clientY;
  });

  // Hide flame when mouse leaves the window
  document.addEventListener('mouseout', () => {
    flame.style.opacity = '0';
    lastX = null;
    lastY = null;
  });
});
