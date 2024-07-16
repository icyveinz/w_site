// Change the name of organization in yamaps depending on screen width.
function maps_interface_builder(width) {
    if (width > 700) {
        return "ООО «УОЛГРИН ЛОГИСТИКС РУС»"
    }
    else {
        return "«УОЛГРИН ЛОГИСТИКС РУС»"
    }
}

export default maps_interface_builder;