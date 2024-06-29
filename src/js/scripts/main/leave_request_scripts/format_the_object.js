function format_the_object(reply, message) {
    switch (reply) {
        case true:
            return `<section class="leave-request-div__result_message_form animate__animated animate__fadeInDown">
                    <h3 class="leave-request-div__result_message_form__message-header">Успешно!</h3>
                    <p class="leave-request-div__result_message_form__message-p">${message}</p>
                </section>`

        case false:
            return `<section class="leave-request-div__result_message_form animate__animated animate__fadeInDown">
                    <h3 class="leave-request-div__result_message_form__message-header">Ошибка!</h3>
                    <p class="leave-request-div__result_message_form__message-p">${message}</p>
                </section>`
    }
}

export default format_the_object;