import animateSplash from './animations';
import headerParallax from './headerParallax';
import ProjectCard from './projectCard';

let projectsData = {};

const createProjectCards = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(projects => {
        projectsData = projects
        console.log(projectsData);
        
        const projectsContainer = document.querySelector('.projects');

        projectsData.forEach(data => {
            const projectCard = new ProjectCard(data, projectsContainer);
            projectCard.createCard();
        });
    });
}
  
window.addEventListener('load', () => {
    const header = document.querySelector('header');
    header.addEventListener('mousemove', headerParallax);
    createProjectCards('https://portafolio-12481.firebaseio.com/projects/cards.json');
});