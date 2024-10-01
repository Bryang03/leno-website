// Waits until the DOM content is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {

    // Selects the toggle button for the mobile menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    // Selects the mobile menu items container
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    // Adds a click event listener to the toggle button
    toggleButton.addEventListener('click', function () {
        // Toggles the 'active' class on the mobile menu to show/hide it
        mobileMenu.classList.toggle('active');
    });


// Video Modal

const modal = document.getElementById('videoModal');
const videoButton = document.querySelector('.preview__video-button'); 
const closeButton = document.querySelector('.modal__close-button'); 
const videoPlayer = document.getElementById('videoPlayer');

// Open modal when clicked

videoButton.addEventListener('click', function () {
  //Show modal 
  modal.style.display = 'block';

  //Replace the src attribute with the video URL 
  videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw';

  // Close Modal on close button click
  closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        videoPlayer.src = '';
       });

       //Close Modal on outer click
       window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        videoPlayer.src = '';
        }
       });
    });
});

// Adds an event listener to detect when the user scrolls the window
window.addEventListener('scroll', function () {
    // Selects the navbar element
    const navbar = document.querySelector('.navbar');

    // If the window is scrolled down, adds a class to style the navbar for scrolling
    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    } else {
        // If not scrolled, removes the scroll styling from the navbar
        navbar.classList.remove('navbar--scroll');
    }
});