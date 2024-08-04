gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {
    ScrollTrigger.matchMedia({
        "(max-width: 750px)" : function() {
            const trigger_node = document.querySelector('.our-dignities-core__restricted-width');
            const timeline_moderated = gsap.timeline({
                scrollTrigger: {
                    trigger: trigger_node,
                    start: 'top bottom-=30%',
                    scrub: true,
                    end: 'bottom bottom-=30%'
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
                    else if (index === 2) {
                        const parent = layout.parentElement;
                        timeline_moderated
                            .from(parent
                                .querySelector('.our-dignities-core__grid-holder__agreement-container')
                                .querySelector('.our-dignities-core__grid-holder__separated-stack__text-container'), {
                                opacity: 0,
                                xPercent: -30,
                                transform: 'scale(0)'
                            })
                            .from(parent
                                .querySelector('.our-dignities-core__grid-holder__agreement-container')
                                .querySelector('.our-dignities-core__grid-holder__separated-stack__image-container'), {
                                opacity: 0,
                                xPercent: -30,
                                transform: 'scale(0)'
                            });
                    }
                    else {
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
                }); // End of section our-dignities


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
                    .from(element.querySelector('img'), {
                        opacity: 0,
                        yPercent: -10,
                        transform: 'scale(0)',
                        duration: 2
                    })
                    .from(element.querySelector('span'), {
                        opacity: 0,
                        transform: 'scale(0)',
                        duration: 1
                    })
            })
        },
        "(min-width: 751px)" : function() {
            const trigger_node = document.querySelector('.our-dignities-core__restricted-width');
            const timeline_moderated = gsap.timeline({
                scrollTrigger: {
                    trigger: trigger_node,
                    start: 'top-=20% bottom-=30%',
                    scrub: true,
                    end: 'bottom bottom-=30%',
                    markers: true
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
                }); // End of section our-dignities



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
    });
});
