import {countryballs_image_template, countryballs_span_template} from "./countryballs_animation_template-min.js";

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
        .from(country_node.querySelectorAll('img'), countryballs_image_template())
        .from(country_node.querySelectorAll('span'), countryballs_span_template())
}
export default countryballs_desktop_activator;