import gsap from 'gsap';

const timeLine = gsap.timeline({ defaults: { ease: 'power1.out', duration: 1}});

const animateSplash = function() {
    timeLine.to('.splash__logo', { scale: 1.3, transformOrigin: '50% 50%', duration: .5});
    timeLine.to('.splash__logo', { scale: 1, transformOrigin: '50% 50%', duration: .5});
    timeLine.fromTo('.splash__circle', { scale: 0 }, { scale: 1, transformOrigin: '50% 50%', delay: .2 });
};

export default animateSplash;