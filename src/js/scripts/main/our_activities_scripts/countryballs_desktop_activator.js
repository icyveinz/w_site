function countryballs_desktop_activator() {
    const country_node = document.querySelector('.our-activities-core__restricted-width');
    const desktop_timeline = gsap.timeline({
        scrollTrigger: {
            trigger: country_node,
            start: 'top bottom-=20%',
            scrub: true,
            end: 'bottom bottom-=20%',
            // markers: true
        }
    });
    desktop_timeline
        .from(country_node.querySelectorAll('img'), {
            opacity: 0,
            yPercent: -10,
            transform: 'scale(0)',
            duration: 2
        })
        .from(country_node.querySelectorAll('span'), {
            opacity: 0,
            transform: 'scale(0)',
            duration: 1
        })
}
export default countryballs_desktop_activator;