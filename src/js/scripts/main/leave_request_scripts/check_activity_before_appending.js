// Check if window is already at the screen
function check_activity_before_appending() {
    if (document.querySelector('.leave-request-div__result_message_form') === null) {
        return true
    }
    else {
        return false
    }
}

export default check_activity_before_appending;
