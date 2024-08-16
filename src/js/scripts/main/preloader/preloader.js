// Preloader script logic

$(function() {
    disable_overflow();
    window.onload = function() {
        activate_overflow_remove_loader()
    };
})

// Disable overflow when loader is active
function disable_overflow() {
    document.body.style.height = "100%";
    document.body.style.overflowY = "hidden"
}

// Activate overflow and remove loader
function activate_overflow_remove_loader() {
    $(document.body).css("overflow-y", "auto");
    setTimeout(function() {
        $('.background-loader-scene,.load').fadeOut(250, function() {
            $('.background-loader-scene, .load').remove();
        })
    }, 250)
}
