import gsap from 'gsap';

const animateSplash = function() {
    const timeLine = gsap.timeline({ defaults: { ease: 'power1.out', duration: .5}});
    timeLine.to('body', { height: '100vh', overflow: 'hidden', duration: 0 });
    timeLine.to('.splash__logo', { scale: 1.3, transformOrigin: '50% 50%'});
    timeLine.to('.splash__logo', { scale: 1, transformOrigin: '50% 50%'});
    timeLine.fromTo('.splash__circle', { scale: 0 }, { scale: 1, transformOrigin: '50% 50%', delay: .2, duration: .8 });
    timeLine.to('body', { height: 'auto', overflow: 'visible', duration: 0 });
    timeLine.to('.splash', { opacity: 0 });
    timeLine.to('.splash', { display: 'none' });
};

export default animateSplash;