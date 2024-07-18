// Change color of buttons on hover
$(function() {
    $('.menu-top-level__div-menu-text > a.menu-top-level__a-call-button').on({
        mouseenter: function() {
            $(this).css('background-color', "rgb(174, 209, 84)");
        },
        mouseleave : function() {
            $(this).css('background-color', "#177b96");
        }
    })

    $(".menu-top-level__div-menu-text > a.menu-top-level__a-navigation").on({
        mouseenter : function() {
            $(this).css("color", "rgb(174, 209, 84)")
        },
        mouseleave : function() {
            $(this).css("color", "#177b96")
        }
    })
})
