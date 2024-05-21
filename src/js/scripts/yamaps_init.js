ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("yandex-maps", {
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
                iconContent: 'ООО «УОЛГРИН ЛОГИСТИКС РУС» ',
                hintContent: 'Мичуринский пр-т. Олимпийская Деревня, дом 4к1, 2-й этаж, офис 3 '
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

    myMap.geoObjects
        .add(myGeoObject);
}