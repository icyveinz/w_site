gsap.registerPlugin(ScrollTrigger);

const text_animation_template = {
    opacity: 0,
    yPercent: -50,
    transform: 'scale(0)'
}

const pic_animation_template = (index) => {
    if (index === 1) {
        return {
            opacity: 0,
            transform: 'scale(0), rotate(270deg)',
            xPercent: 10,
            borderRadius: '150%'
        }
    }
    else {
        return {
            opacity: 0,
            transform: 'scale(0), rotate(-270deg)',
            xPercent: -10,
            borderRadius: '150%'
        }
    }
}

const comment_animation_template = (index) => {
    if (index === 1) {
        return {
            opacity: 0,
            xPercent: -70,
            transform: 'scale(0)'
        }
    }
    else {
        return {
            opacity: 0,
            xPercent: 70,
            transform: 'scale(0)'
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
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
});
