function standard_card_animation() {
    return {
        yPercent : -20,
        opacity : 0,
        borderRadius: '0px'
    }
}

function rotate_3d_object_animation() {
    return {
        opacity : 0,
        transform: 'rotate3d(1, 1, 1, 90deg)'
    }
}

export {standard_card_animation, rotate_3d_object_animation}