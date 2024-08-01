gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {
    const pros_node = document.querySelectorAll('.what-u-get-core__pros-container__single-layout');
    pros_node.forEach((element) => {
        const pros_timeline = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top center',
                scrub: true,
                end: 'bottom center',
                markers: true
            }
        });
        pros_timeline
            .from(element.querySelector('.what-u-get-core__pros-container__single-layout__image-container'), {
                opacity: 0,
                yPercent: -20,
                duration: 2
            })
            .from(element.querySelector('.what-u-get-core__pros-container__single-layout__title-comment-container__title'), {
                xPercent: 20,
                opacity: 0,
                duration: 2
            })
            .from(element.querySelector('.what-u-get-core__pros-container__single-layout__title-comment-container__comment'), {
                xPercent: 20,
                opacity: 0,
                duration: 1
            })
    })
});