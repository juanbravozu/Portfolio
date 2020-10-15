class ProjectCard {

    constructor(data, root) {
        this.data = data;
        this.root = root;
    }

    createCard() {
        let container = document.createElement('a');
        container.classList.add('project', 'col-3');
        this.root.appendChild(container);

        let animationImg = document.createElement('img');
        animationImg.setAttribute('src', this.data.animation);
        animationImg.classList.add('project__animation');
        container.appendChild(animationImg);

        let thumbnailContainer = document.createElement('div');
        thumbnailContainer.classList.add('project__thumbnail');
        container.appendChild(thumbnailContainer);

        let thumbnailImg = document.createElement('img');
        thumbnailImg.setAttribute('src', this.data.thumbnail);
        thumbnailContainer.appendChild(thumbnailImg);

        let projectInfo = document.createElement('div');
        projectInfo.classList.add('project__info');
        container.appendChild(projectInfo);

        let projectTitle = document.createElement('h3');
        projectTitle.innerText = this.data.name;
        projectInfo.appendChild(projectTitle);

        let projectCategory = document.createElement('p');
        projectCategory.innerText = this.data.category;
        projectInfo.appendChild(projectCategory);

        container.addEventListener('mousemove', this.mouseMoveHandler);
        container.addEventListener('mouseleave', this.mouseLeaveHandler);
        container.addEventListener('mouseenter', this.mouseEnterHandler);
    }

    mouseEnterHandler(event) {
        const targetThumbnail = event.target.querySelector('.project__thumbnail img');
        targetThumbnail.style.transitionProperty = 'none'  
        clearTimeout(this.mouseLeaveDelay);
    }
    
    mouseMoveHandler(event) {
        const target = event.target.closest('.project');
        const targetThumbnail = target.querySelector('.project__thumbnail img');
        const targetAnimation = target.querySelector('.project__animation');
        const width = target.offsetWidth;
        const height = target.offsetHeight;
        const x = (event.offsetX/width);
        const y = (event.offsetY/height);

        targetThumbnail.style.transform = 'translate(-' + (50 + ((x-0.5) * -2)) + '%, -' + (50 + ((y-0.5) * -2)) + '%)';
        targetAnimation.style.left = (50 + ((x-0.5) * -4)) + '%';
        targetAnimation.style.top = (50 + ((y-0.5) * -4)) + '%';
    }

    mouseLeaveHandler(event) {
        const targetThumbnail = event.target.querySelector('.project__thumbnail img');

        targetThumbnail.style.transitionProperty = 'transform';
        this.mouseLeaveDelay = setTimeout(() => targetThumbnail.style.transform = 'translate(-50%, -50%)', 300);
    }
}

export default ProjectCard;