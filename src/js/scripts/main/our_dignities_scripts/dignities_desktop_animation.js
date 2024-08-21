import {falling_from_the_top, move_from_the_left_side, move_from_the_right_side} from "./dignities_animation_template.js";

function dignities_desktop_animation() {
    const trigger_node = document.querySelector('.our-dignities-core__grid-holder');
    const timeline_moderated = gsap.timeline({
        scrollTrigger: {
            trigger: trigger_node,
            start: 'top-=40% bottom-=30%',
            scrub: true,
            end: 'bottom bottom-=30%',
            //markers: true
        }
    });
    trigger_node
        .querySelectorAll('section')
        .forEach((layout, index) => {
            if (index === 0) {
                timeline_moderated
                    .from(layout
                        .querySelector('.our-dignities-core__grid-holder__separated-stack')
                        .querySelector('.our-dignities-core__grid-holder__separated-stack__text-container'),
                            falling_from_the_top()
                        )
                    .from(layout
                        .querySelector('.our-dignities-core__grid-holder__separated-stack')
                        .querySelector('.our-dignities-core__grid-holder__separated-stack__image-container'),
                            move_from_the_left_side()
                        )
            }
            else if (index === 1) {
                timeline_moderated
                    .from(layout
                        .querySelector('.our-dignities-core__grid-holder__separated-stack')
                        .querySelector('.our-dignities-core__grid-holder__separated-stack__text-container'),
                            move_from_the_left_side()
                        )
                    .from(layout
                        .querySelector('.our-dignities-core__grid-holder__separated-stack')
                        .querySelector('.our-dignities-core__grid-holder__separated-stack__image-container'),
                            move_from_the_left_side()
                        );
            }
            else if (index === 2) {
                const parent = layout.parentElement;
                timeline_moderated
                    .from(parent
                            .querySelector('.our-dignities-core__grid-holder__operator-container')
                            .querySelector('.our-dignities-core__grid-holder__separated-stack__reversed-text-container'),
                        falling_from_the_top()
                    )
                    .from(parent
                        .querySelector('.our-dignities-core__grid-holder__operator-container')
                        .querySelector('.our-dignities-core__grid-holder__separated-stack__reversed-image-container'),
                        move_from_the_right_side()
                        );
            }
            else {
                const parent = layout.parentElement;
                timeline_moderated
                    .from(parent
                            .querySelector('.our-dignities-core__grid-holder__cargo-container')
                            .querySelector('.our-dignities-core__grid-holder__separated-stack__reversed-text-container'),
                        move_from_the_right_side()
                    )
                    .from(parent
                            .querySelector('.our-dignities-core__grid-holder__cargo-container')
                            .querySelector('.our-dignities-core__grid-holder__separated-stack__reversed-image-container'),
                        move_from_the_right_side()
                    )
            }
        });
}
export default dignities_desktop_animation;
