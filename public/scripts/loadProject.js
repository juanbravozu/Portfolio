const loadProject = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get('id'));

    fetch('https://portafolio-12481.firebaseio.com/projects/cards.json')
    .then(response => response.json())
    .then(projects => {
        const projectContainer = document.querySelector('.projectDetail');
        const currentProject = projects[parseInt(urlParams.get('id'))];
        currentProject.images.forEach(image => {
            const img = document.createElement('img');
            img.setAttribute('src', image);
            projectContainer.appendChild(img);
        });
    });
}