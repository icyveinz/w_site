$(function() {
    // change a color when hovered
    $('.burger-menu-core').on('mouseenter', '.burger-menu-core__unwrapped-and-centered-container .burger-menu-core__unwrapped-and-centered-container__navigation-container .burger-menu-core__unwrapped-and-centered-container__navigation-container__a-navigation', function() {
        $(this).css('color', "rgb(174, 209, 84)");
    });

    // change a color when not hovered
    $('.burger-menu-core').on('mouseleave', '.burger-menu-core__unwrapped-and-centered-container .burger-menu-core__unwrapped-and-centered-container__navigation-container .burger-menu-core__unwrapped-and-centered-container__navigation-container__a-navigation', function() {
        $(this).css('color', "#177b96");
    });

    // change background color for phone holder when hovered
    $('.burger-menu-core').on('mouseenter', '.burger-menu-core__unwrapped-and-centered-container .burger-menu-core__unwrapped-and-centered-container__navigation-container .burger-menu-core__unwrapped-and-centered-container__navigation-container__a-call-button', function() {
        $(this).css('background-color', "rgb(174, 209, 84)");
    });

    // change background color for phone holder when not hovered
    $('.burger-menu-core').on('mouseleave', '.burger-menu-core__unwrapped-and-centered-container .burger-menu-core__unwrapped-and-centered-container__navigation-container .burger-menu-core__unwrapped-and-centered-container__navigation-container__a-call-button', function() {
        $(this).css('background-color', "#177b96");
    });
})
