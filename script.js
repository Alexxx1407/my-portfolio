document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.cyberpunk-button');  // Select all buttons
  const sound = document.getElementById('cyberpunk-sound');        // The sound to play for all buttons

  // Function to handle playing the sound and then proceeding with the action
  function handleButtonClick(event, button) {
    event.preventDefault();  // Prevent the default action (navigation or download)

    // Play the sound effect
    if (sound) {
      sound.play().then(() => {
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
            // For regular links (like returning to the main page), navigate to the link after delay
            window.location.href = button.getAttribute('href');
          }
        }, 300); // Delay to ensure the sound plays before navigation
      }).catch((error) => {
        console.log('Error playing sound:', error);
        // If there's an error playing the sound, still proceed with the action immediately
        if (button.getAttribute('download')) {
          const link = document.createElement('a');
          link.href = button.getAttribute('href');
          link.download = button.getAttribute('download');
          link.click();
        } else if (button.getAttribute('target') === '_blank') {
          window.open(button.getAttribute('href'), '_blank');
        } else if (button.getAttribute('href')) {
          window.location.href = button.getAttribute('href');
        }
      });
    }
  }

  // Add event listeners for all buttons (including the return button)
  buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      handleButtonClick(event, button);  // Use the same sound for all buttons
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
