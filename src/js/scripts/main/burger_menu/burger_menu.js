import extract_menu_template from "./extract_menu_template.js";
import extract_root_container from "./extract_root_container.js";

$(function() {
    let condition = false
    $('.burger').on('click', function() {
        console.log('button is clicked');
        if (!condition) {
            $('.burger-menu-core').append(extract_root_container());
            setTimeout(() => {
                $('.burger-menu-core__unwrapped-and-centered-container').append(extract_menu_template());
            }, 900);
            condition = !condition;
        }
        else {
            $('.burger-menu-core__unwrapped-and-centered-container').empty();
            condition = !condition;
        }
    });
})
