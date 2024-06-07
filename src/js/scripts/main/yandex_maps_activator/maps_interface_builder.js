// Change the name of organization in yamaps depending on screen width.
function maps_interface_builder(width) {
    if (width > 700) {
        console.log(window.screen.width, "Полная версия названия")
        return "ООО «УОЛГРИН ЛОГИСТИКС РУС»"
    }
    else {
        console.log(window.screen.width, "Укороченная версия названия")
        return "«УОЛГРИН ЛОГИСТИКС РУС»"
    }
}

export default maps_interface_builder;