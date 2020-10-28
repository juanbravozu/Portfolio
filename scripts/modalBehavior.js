import gsap from "gsap";

const modalBehavior = () => {
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('.textInput');
    const contactFromBtn = document.querySelector('.contactBtn');
    const contactFromBanner = document.querySelector('.contact__footer');
    const contactFromNav = document.querySelector('#contact__nav');
    const closeBtn = document.querySelector('.modal img');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
    });

    const openModal = () => {
        const timeline = gsap.timeline({ defaults: { ease: 'power1.out', duration: .3}});
        timeline.to('.modal', { display: 'flex', duration: 0 });
        timeline.to('.modal', { opacity: 1 });
    }

    const closeModal = () => {
        const timeline = gsap.timeline({ defaults: { ease: 'power1.out', duration: .3}});
        timeline.to('.modal', { opacity: 0 });
        timeline.to('.modal', { display: 'none', duration: 0 });
    }

    contactFromBtn.addEventListener('click', openModal);
    contactFromBanner.addEventListener('click', openModal);
    contactFromNav.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);
}

export default modalBehavior;