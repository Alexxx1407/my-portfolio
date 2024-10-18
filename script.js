document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.cyberpunk-button');  // Select all buttons

  // Function to handle button actions without the sound effect
  function handleButtonClick(event, button) {
    event.preventDefault();  // Prevent the default action (navigation or download)

    setTimeout(() => {
      if (button.getAttribute('download')) {
        // If it's a download button (for the CV), download the file
        const link = document.createElement('a');
        link.href = button.getAttribute('href');
        link.download = button.getAttribute('download');
        link.click();
      } else if (button.getAttribute('target') === '_blank') {
        // If it's a link to open in a new tab (e.g., GitHub), open it
        window.open(button.getAttribute('href'), '_blank');
      } else if (button.getAttribute('href')) {
        // For regular links (like returning to the main page), navigate to the link
        window.location.href = button.getAttribute('href');
      }
    }, 300); // Delay to simulate the original timing before navigation
  }

  // Add event listeners for all buttons (including the return button)
  buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      handleButtonClick(event, button);  // Handle button click without sound
    });
  });

  // Side Menu Functionality
  const openMenuBtn = document.getElementById('open-menu');
  const closeMenuBtn = document.getElementById('close-menu');
  const sideMenu = document.getElementById('side-menu');

  openMenuBtn.addEventListener('click', function() {
    sideMenu.style.width = "250px";  // Open the side menu
  });

  closeMenuBtn.addEventListener('click', function() {
    sideMenu.style.width = "0";  // Close the side menu
  });
});

document.addEventListener('mousemove', function(e) {
  const cursor = document.getElementById('custom-cursor');
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.getElementById('project-modal');

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
