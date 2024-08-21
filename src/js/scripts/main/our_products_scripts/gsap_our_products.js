import {standard_card_animation, rotate_3d_object_animation} from "./gsap_our_products_animation_template-min.js";
import {maps_lazy_load} from "../yandex_maps_activator/yamaps_init-min.js"

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const cards_trigger_node = document.querySelector('.our-products-core__products-presentation-container');
    const cards_body_node = document.querySelectorAll('.our-products-core__products-presentation-container__single-container');
    const products_timeline = gsap.timeline({
        scrollTrigger: {
            trigger: cards_trigger_node,
            start: 'top-=55% bottom-=25%',
            scrub: true,
            end: 'bottom+=15% bottom-=25%',
            //markers: true
        }
    });
    maps_lazy_load(); // Start uploading yandex-maps preview before the start of animation
    cards_body_node.forEach((object) => {
        products_timeline
            .from(object, standard_card_animation())
            .from(object.querySelector('img'), rotate_3d_object_animation())
    })
});
