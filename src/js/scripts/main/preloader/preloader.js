$(function() {
    $(document.body).css({
        "height" : "100%",
        "overflow-y" : "hidden"
    });
    $(document).ready(function() {
        $(document.body).css("overflow-y", "auto");
        setTimeout(function() {
            $('.background-loader-scene,.load').fadeOut(250, function() {
                $('.background-loader-scene, .load').remove();
            })
        }, 250)
    });
})
