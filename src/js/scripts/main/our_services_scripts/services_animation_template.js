const text_animation_template = {
    opacity: 0,
    yPercent: -50,
    transform: 'scale(0)'
}

const pic_animation_template = (index) => {
    if (index === 1) {
        return {
            opacity: 0,
            transform: 'scale(0), rotate(270deg)',
            xPercent: 10,
            yPercent: 10,
            borderRadius: '150%'
        }
    }
    else {
        return {
            opacity: 0,
            transform: 'scale(0), rotate(-270deg)',
            xPercent: -10,
            yPercent: 10,
            borderRadius: '150%'
        }
    }
}

const comment_animation_template = (index) => {
    if (index === 1) {
        return {
            opacity: 0,
            xPercent: -70,
            transform: 'scale(0)'
        }
    }
    else {
        return {
            opacity: 0,
            xPercent: 70,
            transform: 'scale(0)'
        }
    }
}

const comment_animation_template_mobile = (index) => {
    if (index === 1) {
        return {
            opacity: 0,
            xPercent: -40,
            transform: 'scale(0)'
        }
    }
    else {
        return {
            opacity: 0,
            xPercent: 40,
            transform: 'scale(0)'
        }
    }
}

export {text_animation_template, pic_animation_template, comment_animation_template, comment_animation_template_mobile}