import {
    comment_animation_template,
    pic_animation_template,
    text_animation_template
} from "./services_animation_template.js";

function services_desktop_activator() {
    const layout_trigger_node = document.querySelectorAll('.our-services-core__grid-container');
    layout_trigger_node.forEach((element, index) => {
        const layout_timeline = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top bottom-=30%',
                scrub: true,
                end: 'bottom bottom-=30%',
                //markers: true
            }
        });
        layout_timeline
            .from(element.querySelector('img'), pic_animation_template(index))
            .from(element.querySelector('h4'), text_animation_template)
            .from(element.querySelector('p'), comment_animation_template(index));
    })
}

export default services_desktop_activator;

