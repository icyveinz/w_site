document.addEventListener('DOMContentLoaded', () => {
    const timeline = gsap.timeline();
    timeline
        .from('.return-to-main-centered__restricted-width__a', {
            opacity: 0,
            color: '#ffffff',
            yPercent: -10,
            duration: 2
        })
        .from('.agreement-public-container__section__header', {
            opacity: 0,
            yPercent: -10,
            ease: "expo.in",
            duration: 2,
        })
        .from('.agreement-public-container__section__unordered-list__li', {
            opacity: 0,
            fontSize: '1vw',
            yPercent: -10,
            ease: "expo.in",
            duration: 2,
            stagger: 0.5
        })
})