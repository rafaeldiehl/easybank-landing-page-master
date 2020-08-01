const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const shadow = document.querySelector('.shadow');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        shadow.classList.toggle('shadow-active');
    });
};

navSlide();