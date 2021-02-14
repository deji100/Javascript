const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav_links = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav_links.classList.toggle('nav-active');
    });
}

navSlide();