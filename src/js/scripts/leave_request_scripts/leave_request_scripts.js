import verify_fields from "./verify_fields.js";
import format_the_object from "./format_the_object.js";
import display_and_hide_notification from "./display_and_hide_notification.js";
import write_customer_request from "./write_customer_request.js";

$(function () {
    const button = $(".leave-request-div__request-frame-div__button");

    button.on({
        mouseenter: function () {
            $(this).css({
                'background-color': "rgb(174, 209, 84)",
                'border-radius': "15px"
            })
        },
        mouseleave: function () {
            $(this).css({
                'background-color' : "#177b96",
                'border-radius' : "8px"
            })
        }
    });

    // Fetch the name & surname of customer and then make a request to the API.
    button.on('click', function() {
        const name = document.getElementById("customer_name").value;
        const phone_num = document.getElementById("customer_phone").value;
        const comment = document.getElementById("customer_comment").value;

        console.log('clicked');

        const result = verify_fields(name, phone_num, comment);

        switch (result[0]) {
            case true:
                write_customer_request(name, phone_num, comment);
                return
            case false:
                display_and_hide_notification(format_the_object(false, result[1]))
                return;
        }
    })
});