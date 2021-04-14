const textInputInteraction = () => {

    const textInputContainers = document.querySelectorAll('.textInput');

    textInputContainers.forEach((container) => {
        let input = container.querySelector('input');
        if(!input) {
            input = container.querySelector('textarea');
        }
        
        const isTextarea = input.tagName == "TEXTAREA";

        input.addEventListener('focus', () => {
            container.classList.add('textInput--active');
        });

        input.addEventListener('blur', () => {
            const errorMsg = container.querySelector('.textInput__error');
            if(input.getAttribute('type') == 'email') {
                if(input.checkValidity()) {
                    container.classList.remove('textInput--hasError');
                    errorMsg.innerText = '';
                } else if(input.value.trim()=='') {
                    container.classList.remove('textInput--active');
                    container.classList.add('textInput--hasError');
                    errorMsg.innerHTML = "This field is required";
                } else {
                    container.classList.add('textInput--hasError');
                    errorMsg.innerText = 'Please enter a valid e-mail address';
                }
            } else if(input.value.trim()=='') {
                container.classList.remove('textInput--active');
                container.classList.add('textInput--hasError');
                errorMsg.innerHTML = "This field is required";
            } else { 
                container.classList.remove('textInput--hasError');
                errorMsg.innerText = '';
            }   
        });

        const limitTextarea = (event) => {
            const indicator = container.querySelector('p');
                if(!input.value.length <= 600) {
                    input.value = input.value.slice(0, 600);
                }
                indicator.innerText = (600 - input.value.length) + '/600';
        } 

        if(isTextarea) {
            input.addEventListener('input', limitTextarea);
            input.addEventListener('paste', limitTextarea);
            input.addEventListener('keypress', (event) => { 
                if(event.key == 'Enter') {
                    event.preventDefault();
                    input.value += "\n";
                }
            });

            const textArea = container.querySelector('.textInput__textarea');
            textArea.addEventListener('click', () => { input.focus() });
        }
    });
}

module.exports = textInputInteraction;