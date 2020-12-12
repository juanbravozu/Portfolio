class ProjectCard {

    constructor(data, index, root) {
        this.data = data;
        this.root = root;
        this.index = index;
    }

    createCard() {
        const container = document.createElement('a');
        container.classList.add('project', 'col-3');
        this.root.appendChild(container);

        const cardWrap = document.createElement('div');
        cardWrap.classList.add('project__wrap');
        container.appendChild(cardWrap); 

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('project__imageContainer');
        cardWrap.appendChild(imageContainer);

        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.classList.add('project__thumbnail');
        imageContainer.appendChild(thumbnailContainer);

        const thumbnailImg = document.createElement('img');
        thumbnailImg.setAttribute('src', this.data.thumbnail);
        thumbnailImg.classList.add('project__img');
        thumbnailContainer.appendChild(thumbnailImg);

        const animationImg = document.createElement('img');
        animationImg.setAttribute('src', this.data.animation);
        animationImg.classList.add('project__animation');
        imageContainer.appendChild(animationImg);

        const projectInfo = document.createElement('div');
        projectInfo.classList.add('project__info');
        cardWrap.appendChild(projectInfo);

        const projectTitle = document.createElement('h3');
        projectTitle.innerText = this.data.name;
        projectInfo.appendChild(projectTitle);

        const projectCategory = document.createElement('p');
        projectCategory.innerText = this.data.category;
        projectInfo.appendChild(projectCategory);

        container.addEventListener('mousemove', this.mouseMoveHandler);
        container.addEventListener('mouseleave', this.mouseLeaveHandler);
        container.addEventListener('mouseenter', this.mouseEnterHandler);
        container.addEventListener('click', () => {
            window.location.href = './project.html?id='+this.index;
        });
    }

    mouseEnterHandler(event) {
        const targetThumbnail = event.target.querySelector('.project__thumbnail img');
        const cardWrap = event.target.querySelector('.project__wrap');

        targetThumbnail.style.transitionProperty = 'none'  
        cardWrap.style.transitionProperty = 'none'  
        clearTimeout(this.mouseLeaveDelay);
    }
    
    mouseMoveHandler(event) {
        const target = event.target;
        const cardWrap = target.querySelector('.project__wrap');
        const targetThumbnail = target.querySelector('.project__thumbnail img');
        const targetAnimation = target.querySelector('.project__animation');
        const width = target.offsetWidth;
        const height = target.offsetHeight;
        const x = (event.offsetX/width) - 0.5; 
        const y = (event.offsetY/height) - 0.5;

        cardWrap.style.transform = `perspective(600px) rotateY( ${x * 10}deg) rotateX(${y * -10}deg)`;
        targetThumbnail.style.transform = `translate(-${50 + (x * -2)}%, -${50 + (y * -2)}%)`;
        targetAnimation.style.left = (50 + (x * 5)) + '%';
        targetAnimation.style.top = (50 + (y * 5)) + '%';
    }

    mouseLeaveHandler(event) {
        const targetThumbnail = event.target.querySelector('.project__thumbnail img');
        const cardWrap = event.target.querySelector('.project__wrap');

        targetThumbnail.style.transitionProperty = 'transform';
        cardWrap.style.transitionProperty = 'transform';
        this.mouseLeaveDelay = setTimeout(() => {
            targetThumbnail.style.transform = 'translate(-50%, -50%)';
            cardWrap.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
        }, 300);
    }
}

export default ProjectCard;