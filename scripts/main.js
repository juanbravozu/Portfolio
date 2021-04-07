import animateSplash from './animations';
import modalBehavior from './modalBehavior';
import ProjectCard from './projectCard';
import textInputInteraction from './textInputInteraction';

let projectsData = {};

const createProjectCards = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(projects => {
        projectsData = projects;
        
        const projectsContainer = document.querySelector('.projects');

        projectsData.forEach((data, index) => {
            const projectCard = new ProjectCard(data, index, projectsContainer);
            projectCard.createCard();
        });
    });
}

window.addEventListener('load', () => {
    createProjectCards('https://portafolio-12481.firebaseio.com/projects/cards.json');
    textInputInteraction();
    modalBehavior();
    animateSplash();
});

window.addEventListener('load', warningMessage);
window.addEventListener('resize', warningMessage);

function warningMessage(event) {
    if(window.innerWidth < 1024) {
        alert('Date of writing: 7th of april, 2021 \n I know this site isn\'t responsive at all but I\'ll be redesigning it soon. \n It\'ll be looking way cleaner and be also mobile friendly 🤓\n Sorry for the annoying alert')
        event.target.removeEventListener('load', warningMessage);
        event.target.removeEventListener('resize', warningMessage);
    }    
}