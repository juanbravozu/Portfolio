define(() => {
    const form = document.querySelector('form');
    const inputContainers = document.querySelectorAll('.textInput');
    const contactFormBtn = document.querySelector('.contactBtn');
    const contactFormBanner = document.querySelector('.contact__footer');
    const contactFormNav = document.querySelector('#contact__nav');
    const closeBtn = document.querySelector('.modal img');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;
        let dataJson = {};
        inputContainers.forEach((container) => {
            if(container.classList.contains('inputText__hasError')) {
                isValid = false;
            } else {
                let input = container.querySelector('input');
                if(!input) input = container.querySelector('textarea');
                dataJson[input.id] = input.value;
            }
        });

        if(isValid) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            let date = new Date().toISOString().split('T')[0]+"_"+new Date().toISOString().split('T')[1].slice(0, 8);            
        }
    });

    const openModal = () => {
        const modal = document.querySelector('.modal__container');
        modal.classList.remove('modal--message');
    }

    const closeModal = () => {
        inputContainers.forEach((container) => {
            let input = container.querySelector('input');

            if(!input) {
                input = container.querySelector('textarea');
            }

            input.value = '';
        });
    }

    const messageModal = () => {
        const modal = document.querySelector('.modal__container');
        modal.classList.add('modal--message');
    }

    contactFormBtn.addEventListener('click', openModal);
    if(contactFormBanner) contactFormBanner.addEventListener('click', openModal);
    contactFormNav.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);
});