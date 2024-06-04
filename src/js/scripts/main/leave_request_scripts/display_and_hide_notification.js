async function display_and_hide_notification(object) {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    $(".leave-request-div__absolute-container").append(object);
    await delay(5000);
    const target = document.querySelector(".leave-request-div__result_message_form")
    target.classList.add("animate__fadeOutDown");

    function handleAnimationEnd(event) {
        event.stopPropagation();
        target.remove();
    }

    target.addEventListener('animationend', handleAnimationEnd, {once : true});
}

export default display_and_hide_notification;