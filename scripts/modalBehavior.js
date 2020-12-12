import gsap from "gsap";
import firebase from 'firebase/app';
import 'firebase/firestore';

const modalBehavior = () => {
    const app = firebase.initializeApp({
        apiKey: "AIzaSyAnKkFpCyQFzXKVsw6uYculXLN-6DH_PJQ",
        authDomain: "portafolio-12481.firebaseapp.com",
        databaseURL: "https://portafolio-12481.firebaseio.com",
        projectId: "portafolio-12481",
        storageBucket: "portafolio-12481.appspot.com",
        messagingSenderId: "371763924698",
        appId: "1:371763924698:web:e42c681f3e5f5edd0cdfe3",
        measurementId: "G-Y5SZZ040Q6"
    });
    const db = app.firestore();

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
            db.collection('messages').doc(date).set(dataJson)
            .then(() => {
                messageModal();
            });

            
        }
    });

    const openModal = () => {
        const modal = document.querySelector('.modal__container');
        modal.classList.remove('modal--message');
        const timeline = gsap.timeline({ defaults: { ease: 'power1.out', duration: .3}});
        timeline.to('.modal', { display: 'flex', duration: 0 });
        timeline.to('.modal', { opacity: 1 });
    }

    const closeModal = () => {
        inputContainers.forEach((container) => {
            let input = container.querySelector('input');

            if(!input) {
                input = container.querySelector('textarea');
            }

            input.value = '';
        });
        
        const timeline = gsap.timeline({ defaults: { ease: 'power1.out', duration: .3}});
        timeline.to('.modal', { opacity: 0 });
        timeline.to('.modal', { display: 'none', duration: 0 });
    }

    const messageModal = () => {
        const modal = document.querySelector('.modal__container');
        modal.classList.add('modal--message');
    }

    contactFormBtn.addEventListener('click', openModal);
    if(contactFormBanner) contactFormBanner.addEventListener('click', openModal);
    contactFormNav.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);
}

export default modalBehavior;