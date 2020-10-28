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

        projectsData.forEach(data => {
            const projectCard = new ProjectCard(data, projectsContainer);
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