gsap.registerPlugin(ScrollTrigger);

const text_animation_template = {
    opacity: 0,
    yPercent: -10,
    transform: 'scale(0)'
}

const pic_animation_template = (index) => {
    if (index === 1) {
        return {
            opacity: 0,
            transform: 'scale(0), rotate(270deg)',
            xPercent: 10
        }
    }
    else {
        return {
            opacity: 0,
            transform: 'scale(0), rotate(-270deg)',
            xPercent: -10
        }
    }
}

const comment_animation_template = (index) => {
    if (index === 1) {
        return {
            opacity: 0,
            xPercent: -40,
            transform: 'scale(0)'
        }
    }
    else {
        return {
            opacity: 0,
            xPercent: 40,
            transform: 'scale(0)'
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const trigger_node = document.querySelector('.our-services-core__container');
    const services_timeline = gsap.timeline({
        scrollTrigger: {
            trigger: trigger_node,
            start: 'top bottom-=20%',
            scrub: true,
            end: 'bottom bottom-=20%',
            markers: true
        }
    });
    services_timeline
        .from(trigger_node.querySelector('.our-services-core__container__title'), text_animation_template)
        .from(trigger_node.querySelector('.our-services-core__container__comments'), text_animation_template);

    const layout_trigger_node = document.querySelectorAll('.our-services-core__grid-container');
    layout_trigger_node.forEach((element, index) => {
        const layout_timeline = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top center',
                scrub: true,
                end: 'bottom center',
                markers: true
            }
        });
        layout_timeline
            .from(element.querySelector('img'), pic_animation_template(index))
            .from(element.querySelector('h4'), text_animation_template)
            .from(element.querySelector('p'), comment_animation_template(index));
    })
});
