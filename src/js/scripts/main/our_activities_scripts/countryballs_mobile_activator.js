import {countryballs_image_template, countryballs_span_template} from "./countryballs_animation_template.js";

function countryballs_mobile_activator() {
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
            .from(element.querySelector('img'), countryballs_image_template())
            .from(element.querySelector('span'), countryballs_span_template())
    })
}
export default countryballs_mobile_activator;