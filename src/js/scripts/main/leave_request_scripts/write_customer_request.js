import format_the_object from "./format_the_object.js";
import display_and_hide_notification from "./display_and_hide_notification.js";
import route from "../url_routes.js";

function write_customer_request(name, phone, comment) {

    fetch(`${route.api_url}/orders_client/create/wgl/`, {
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
                display_and_hide_notification(object)
                    .then(() => {
                        document.getElementById("customer_name").value = "";
                        document.getElementById("customer_phone").value = "";
                        document.getElementById("customer_comment").value = "";
                    })
            }
            else {
                const object = format_the_object(false, json.message);
                display_and_hide_notification(object)
            }
        })
        .catch(function(err) {
            const object = format_the_object(false, err)
            display_and_hide_notification(object)
        })
}

export default write_customer_request;
