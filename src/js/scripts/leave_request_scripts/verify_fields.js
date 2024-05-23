function verify_fields(name, phone_mail, comment) {
    if (name.length >= 2) {
        if (phone_mail.includes("@")) {
            if (comment.length >= 10) {
                return [true, ""]
            }
            else {
                return [false, "Поле для комментария должно содержать более 9 символов."]
            }
        }
        else {
            if (phone_mail.length >= 7) {
                if (comment.length >= 10) {
                    return [true, ""]
                }
                else {
                    return [false, "Поле для комментария должно содержать более 9 символов."]
                }
            }
            else {
                return [false, "Ваша почта/телефон некорректно заполнены. Если вводили почту - проверьте наличие @. Если номер - длина номера должна быть больше 6 символов."]
            }
        }
    }
    else {
        return [false, "Поле имя должно быть длинее 1 символа"]
    }
}

export default verify_fields;