document.addEventListener('DOMContentLoaded', () => {
    const timeline = gsap.timeline();
    timeline
        .from(document.querySelector('.call-fab-container__a'), {
            scale: 0,
            opacity: 0,
            borderRadius: 0,
            duration : 0.8
        })
        .from(document.querySelector('.call-fab-container__icon'), {
            scale: 0,
            opacity: 0,
            duration : 1
        });

    document
        .querySelector('.call-fab-container__a')
        .addEventListener('mouseenter', () => {
            gsap
                .to(document.querySelector('.call-fab-container__icon'), {
                    scale: 0.8,
                    duration : 0.5
                })
        });

    document
        .querySelector('.call-fab-container__a')
        .addEventListener('mouseleave', () => {
            gsap
                .to(document.querySelector('.call-fab-container__icon'), {
                    scale: 1,
                    duration : 0.5
                })
        })
})