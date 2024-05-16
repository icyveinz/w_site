$(function() {
    $(".leave-request-div__request-frame-div__button").on({
        mouseenter : function() {
            $(this).css({
                'background-color' : "rgb(174, 209, 84)",
                'border-radius' : "15px"
            })
        },
        mouseleave : function() {
            $(this).css({
                'background-color' : "#177b96",
                'border-radius' : "8px"
            })
        }
    })
});