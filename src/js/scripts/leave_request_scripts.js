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

function write_customer_request(name, phone, comment) {

    const route = {
        url : "http://localhost:8000"
    }

    fetch(`${route.url}/api/walgreen/customer/write`, {
        method : "POST",
        body : JSON.stringify({
            customer_name : `${name}`,
            customer_phone_email : `${phone}`,
            customer_comment : `${comment}`
        }),
        headers : {
            "Content-Type" : "application/json"
        }
    })
        .then((respone) => respone.json())
        .then((json) => {
            console.log('success!')
        })
        .catch(function(err) {
            console.log(err)
        })
}

$(function() {
    const button = $(".leave-request-div__request-frame-div__button");

    button.on({
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
    button.on('click', function() {
        const name = document.getElementById("customer_name").value;
        const phone_num = document.getElementById("customer_phone").value;
        const comment = document.getElementById("customer_comment").value;

        console.log('clicked');

        switch (verify_fields(name, phone_num, comment)[0]) {
            case true:
                write_customer_request(name, phone_num, comment);
                return
            case false:
                return;
        }
    })
});