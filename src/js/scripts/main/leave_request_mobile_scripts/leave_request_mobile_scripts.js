import verify_fields from "../leave_request_scripts/verify_fields";
import check_activity_before_appending from "../leave_request_scripts/check_activity_before_appending";
import format_the_object from "../leave_request_scripts/format_the_object";
import write_customer_request_mobile from "./write_customer_request_mobile";
import display_and_hide_notification_mobile from "./display_and_hide_notification_mobile";

$(function() {
    const mobile_button = $("#mobile");

    mobile_button.on({
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
    mobile_button.on('click', function() {
        const name = document.getElementById("customer_name_mobile").value;
        const phone_num = document.getElementById("customer_phone_mobile").value;
        const comment = document.getElementById("customer_comment_mobile").value;

        const result = verify_fields(name, phone_num, comment); //

        // check if alert window is already at the screen. If true - do not toggle notification.
        if (check_activity_before_appending()) { //
            switch (result[0]) {
                case true:
                    write_customer_request_mobile(name, phone_num, comment);
                    return
                case false:
                    display_and_hide_notification_mobile(format_the_object(false, result[1]))
                    return;
            }
        }
    })
})