import route from "../url_routes";
import format_the_object from "../leave_request_scripts/format_the_object";
import display_and_hide_notification_mobile from "./display_and_hide_notification_mobile";

function write_customer_request_mobile(name, phone, comment) {

    fetch(`${route.api_url}/api/walgreen/customer/write`, {
        method : "POST",
        body : JSON.stringify({
            email : `${phone}`,
            name : `${name}`,
            about_customer : `${comment}`
        }),
        headers : {
            "Content-Type" : "application/json"
        }
    })
        .then((respone) => respone.json())
        .then((json) => {
            if (json.is_succeed) {
                const object = format_the_object(true, json.message);
                display_and_hide_notification_mobile(object)
                    .then(() => {
                        document.getElementById("customer_name_mobile").value = "";
                        document.getElementById("customer_phone_mobile").value = "";
                        document.getElementById("customer_comment_mobile").value = "";
                    })
            }
            else {
                const object = format_the_object(false, json.message);
                display_and_hide_notification_mobile(object)
            }
        })
        .catch(function(err) {
            const object = format_the_object(false, err)
            display_and_hide_notification_mobile(object)
        })
}

export default write_customer_request_mobile;