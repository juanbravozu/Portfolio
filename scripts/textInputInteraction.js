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
            if(input.value.trim()=='') {
                container.classList.remove('textInput--active');
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

            const textArea = container.querySelector('.textInput__textarea');
            textArea.addEventListener('click', () => { input.focus() });
        }
    });
}

export default textInputInteraction;