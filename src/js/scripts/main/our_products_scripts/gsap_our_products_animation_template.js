function standard_card_animation() {
    return {
        xPercent : -20,
        opacity : 0,
        boxShadow: '-30px 0px 5px 10px #000000'
    }
}

function rotate_3d_object_animation() {
    return {
        opacity : 0,
        transform: 'rotate3d(1, 1, 1, 45deg)'
    }
}

export {standard_card_animation, rotate_3d_object_animation}