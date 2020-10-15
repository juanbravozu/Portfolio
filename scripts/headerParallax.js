const headerParallax = function(event) {
    const x = (event.screenX/event.target.closest('header').offsetWidth) - 0.5;
    const y = (event.screenY/event.target.closest('header').offsetHeight) - 0.5;
    const img = document.querySelector('.header__img');

    img.style.transform = `perspective(500px) rotateY(${(x * 2)}deg) rotateX(${(y * -2)}deg) translateX(${x * 40}px) translateY(${y * 40}px)`;
}

export default headerParallax;