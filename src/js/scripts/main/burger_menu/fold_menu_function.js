function fold_menu_function(condition) {
    const node = document.querySelectorAll('.burger-menu-core__unwrapped-and-centered-container__navigation-container');
    node.forEach(element => {
        element.classList.add('animate__fadeOutUp')
    });
    setTimeout(() => {
        let node = document.querySelector('.burger-menu-core__unwrapped-and-centered-container');
        node.classList.add('animate__fadeOutUp');
        setTimeout(() => {
            $('.burger-menu-core__unwrapped-and-centered-container').remove();
        }, 800);
    }, 800);
    condition = !condition;
}

export default fold_menu_function;