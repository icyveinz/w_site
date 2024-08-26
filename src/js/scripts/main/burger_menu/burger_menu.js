import extract_menu_template from "./extract_menu_template.js";
import extract_root_container from "./extract_root_container.js";
import fold_menu_function from "./fold_menu_function.js";
import run_append_animation from "./gsap_mobile_menu_animation";

$(function() {
    let condition = false;
    $('.burger').on('click', function() {
        console.log('button is clicked');
        if (!condition) {
            $('.burger-menu-core').append(extract_root_container());
            $('.burger-menu-core__unwrapped-and-centered-container').append(extract_menu_template());
            run_append_animation();
            // setTimeout(() => {
            //     $('.burger-menu-core__unwrapped-and-centered-container').append(extract_menu_template());
            // }, 900);
            condition = !condition;
        }
        else {
            fold_menu_function();
            condition = !condition;
        }
    });
    // Fold menu when <a> is clicked
    $('.burger-menu-core').on('click', '.burger-menu-core__unwrapped-and-centered-container .burger-menu-core__unwrapped-and-centered-container__navigation-container .burger-menu-core__unwrapped-and-centered-container__navigation-container__a-navigation', function() {
        fold_menu_function();
        $('#burger-checkbox').prop('checked', false);
        condition = false;
    });
})
