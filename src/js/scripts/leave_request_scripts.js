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
    });

    // Fetch the name & surname of customer and then make a request to the API.
    $(".leave-request-div__request-frame-div__button").on('click', function() {
        const name = document.getElementById("customer_name").value;
        const phone_num = document.getElementById("customer_phone").value;
    })
});