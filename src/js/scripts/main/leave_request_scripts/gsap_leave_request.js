document.addEventListener('DOMContentLoaded', () => {
    const request_line = gsap.timeline();
    request_line
        .from('.leave-request-div__h1-title-styler', {
            opacity: 0,
            yPercent: -15,
            duration: 1
        })
        .from('.leave-request-div__p-title-styler', {
            opacity: 0,
            xPercent: -10,
            duration: 2
        })
        .from('.leave-request-div__request-call-column-align', {
            opacity: 0,
            duration: 1,
            transform: 'scale(0)'
        })
        .from('.leave-request-div__request-frame-div', {
            opacity: 0,
            xPercent: -20,
            stagger: 0.5
        })
});