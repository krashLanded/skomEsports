
const toggleButton = document.querySelector('.toggle-button')
const navBarLinks = document.querySelector('.header-links')

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
});

