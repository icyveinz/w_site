document.addEventListener('DOMContentLoaded', () => {
    // const li_elements = document.querySelectorAll('.agreement-public-container__section__unordered-list__li');
    // const timeline = gsap.timeline();
    // li_elements.forEach((element) => {
    //     gsap.from(element, {
    //         opacity: 0,
    //         yPercent: -10,
    //         ease: "expo.in",
    //         duration: 2
    //     });
    // });

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