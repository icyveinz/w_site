gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {
    const clipping_node = document.querySelector('.what-u-get-core__restricted-width');
    const pros_timeline = gsap.timeline({
        scrollTrigger: {
            trigger: clipping_node,
            start: 'top bottom-=20%',
            scrub: true,
            end: 'bottom bottom-=20%',
            //markers: true
        }
    });
    pros_timeline
        .from(document.querySelectorAll('.what-u-get-core__pros-container__single-layout__image-container'), {
            opacity: 0,
            yPercent: -130,
            duration: 2,
            stagger: 0.2
        })
        .from(document.querySelectorAll('.what-u-get-core__pros-container__single-layout__title-comment-container__title'), {
            xPercent: 10,
            opacity: 0,
            duration: 2,
            stagger: 0.2
        })
        .from(document.querySelectorAll('.what-u-get-core__pros-container__single-layout__title-comment-container__comment'), {
            xPercent: 10,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        })
});
