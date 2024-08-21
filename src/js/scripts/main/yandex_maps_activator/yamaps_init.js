import maps_interface_builder from "./maps_interface_builder-min.js";

function maps_lazy_load() {
    ymaps.ready(init);
}

function init() {
    var myMap = new ymaps.Map(document.getElementById('yandex-maps'), {
            center: [55.676160, 37.470385],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.676160, 37.470385]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: maps_interface_builder(window.screen.width),
                hintContent: 'Мичуринский пр-т. Олимпийская Деревня, дом 4к1, 2-й этаж, офис 3 '
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        });

    myMap.geoObjects
        .add(myGeoObject);
}

export {maps_lazy_load};