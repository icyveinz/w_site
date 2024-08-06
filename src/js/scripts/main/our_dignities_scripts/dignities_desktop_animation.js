function dignities_desktop_animation() {
    const trigger_node = document.querySelector('.our-dignities-core__restricted-width');
    const timeline_moderated = gsap.timeline({
        scrollTrigger: {
            trigger: trigger_node,
            start: 'top-=20% bottom-=30%',
            scrub: true,
            end: 'bottom bottom-=30%',
            //markers: true
        }
    });
    trigger_node
        .querySelector('.our-dignities-core__grid-holder')
        .querySelectorAll('section')
        .forEach((layout, index) => {
            if (index === 0) {
                timeline_moderated
                    .from(layout
                        .querySelector('.our-dignities-core__grid-holder__separated-stack')
                        .querySelector('.our-dignities-core__grid-holder__separated-stack__text-container'), {
                        opacity: 0,
                        yPercent: -50
                    })
                    .from(layout
                        .querySelector('.our-dignities-core__grid-holder__separated-stack')
                        .querySelector('.our-dignities-core__grid-holder__separated-stack__image-container'), {
                        opacity: 0,
                        xPercent: -30,
                        transform: 'scale(0)'
                    })
            }
            else if (index === 1) {
                timeline_moderated
                    .from(layout
                        .querySelector('.our-dignities-core__grid-holder__separated-stack')
                        .querySelector('.our-dignities-core__grid-holder__separated-stack__text-container'), {
                        opacity: 0,
                        xPercent: -30,
                        transform: 'scale(0)'
                    })
                    .from(layout
                        .querySelector('.our-dignities-core__grid-holder__separated-stack')
                        .querySelector('.our-dignities-core__grid-holder__separated-stack__image-container'), {
                        opacity: 0,
                        xPercent: -30,
                        transform: 'scale(0)'
                    });
            }
            else if (index === 2) {
                const parent = layout.parentElement;
                timeline_moderated
                    .from(parent
                            .querySelector('.our-dignities-core__grid-holder__operator-container')
                            .querySelector('.our-dignities-core__grid-holder__separated-stack__reversed-text-container'), {
                            opacity: 0,
                            yPercent: -50
                        }
                    )
                    .from(parent
                        .querySelector('.our-dignities-core__grid-holder__operator-container')
                        .querySelector('.our-dignities-core__grid-holder__separated-stack__reversed-image-container'), {
                        opacity: 0,
                        xPercent: 30,
                        transform: 'scale(0)'
                    });
            }
            else {
                const parent = layout.parentElement;
                timeline_moderated
                    .from(parent
                            .querySelector('.our-dignities-core__grid-holder__cargo-container')
                            .querySelector('.our-dignities-core__grid-holder__separated-stack__reversed-text-container'), {
                            opacity: 0,
                            xPercent: 30,
                            transform: 'scale(0)'
                        }
                    )
                    .from(parent
                            .querySelector('.our-dignities-core__grid-holder__cargo-container')
                            .querySelector('.our-dignities-core__grid-holder__separated-stack__reversed-image-container'), {
                            opacity: 0,
                            xPercent: 30,
                            transform: 'scale(0)'
                        }
                    )
            }
        });
}
export default dignities_desktop_animation;