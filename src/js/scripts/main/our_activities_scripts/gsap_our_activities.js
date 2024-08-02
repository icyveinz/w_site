gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {
    const country_node = document.querySelectorAll('.our-activities-core__countries-layout-container__image-comment-container');
    country_node.forEach((element) => {
        const country_timeline = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top bottom-=20%',
                scrub: true,
                end: 'bottom bottom-=20%',
                // markers: true
            }
        });
        country_timeline
            .from(element.querySelector('img'), {
                opacity: 0,
                yPercent: -10,
                transform: 'scale(0)',
                duration: 2
            })
            .from(element.querySelector('span'), {
                opacity: 0,
                transform: 'scale(0)',
                duration: 1
            })
    })
});
