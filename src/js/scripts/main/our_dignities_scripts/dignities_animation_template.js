function falling_from_the_top() {
    return {
        opacity: 0,
        yPercent: -50
    }
}

function move_from_the_left_side() {
    return {
        opacity: 0,
        xPercent: -30,
        transform: 'scale(0)'
    }
}

function move_from_the_right_side() {
    return {
        opacity: 0,
        xPercent: 30,
        transform: 'scale(0)'
    }
}

export {falling_from_the_top, move_from_the_right_side, move_from_the_left_side}