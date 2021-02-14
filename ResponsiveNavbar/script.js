const toggle_button = document.getElementsByClassName('toggle-button')[0];
const nav_links = document.getElementsByClassName('navbar-links')[0];

toggle_button.addEventListener('click', () => {
    nav_links.classList.toggle('active');
})