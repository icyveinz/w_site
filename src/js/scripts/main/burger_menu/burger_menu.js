import extract_menu_template from "./extract_menu_template.js";

$(function() {
    let condition = false
    $('.burger').on('click', function() {
        console.log('button is clicked');
        if (!condition) {
            $('.burger-menu-core__unwrapped-and-centered-container').append(extract_menu_template());
            condition = !condition;
        }
        else {
            $('.burger-menu-core__unwrapped-and-centered-container').empty();
            condition = !condition;
        }
    });
})
