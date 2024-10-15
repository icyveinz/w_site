document.addEventListener('DOMContentLoaded', () => {
    const timeline = gsap.timeline();
    timeline
        .from(document.querySelector('.call-fab-container__a'), {
            scale: 0,
            opacity: 0,
            duration : 0.8
        })
        .from(document.querySelector('.call-fab-container__icon'), {
            scale: 0,
            opacity: 0,
            duration : 1
        });
})