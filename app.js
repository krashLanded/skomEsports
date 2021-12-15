function createToggle() {
const toggleButton = document.querySelector('.toggle-button')
const navBarLinks = document.querySelector('.header-links')
const socials = document.querySelector('.socials')


toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
    socials.classList.toggle('active');
});
};
