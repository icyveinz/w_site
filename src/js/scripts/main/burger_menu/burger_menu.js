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
            const node = document.querySelectorAll('.burger-menu-core__unwrapped-and-centered-container__navigation-container');
            node.forEach(element => {
                element.classList.add('animate__rotateOutUpRight')
            });
            setTimeout(() => {
                let node = document.querySelector('.burger-menu-core__unwrapped-and-centered-container');
                node.classList.add('animate__fadeOutUp');
                setTimeout(() => {
                    $('.burger-menu-core__unwrapped-and-centered-container').remove();
                }, 800);
            }, 800);
            // setTimeout(() => {
            //     $('.burger-menu-core__unwrapped-and-centered-container').remove();
            // }, 900)
            condition = !condition;
        }
    });
})
