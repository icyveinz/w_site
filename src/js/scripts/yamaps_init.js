initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('yandex-maps'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [37.470427, 55.676080],

                // Уровень масштабирования
                zoom: 15
            }
        }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());

    map.addChild(new ymaps3.YMapDefaultFeaturesLayer()); // В этом слое будут маркеры.
    // DOM-элемент должен быть создан заранее, но его содержимое можно задать в любой момент.
    const content = document.createElement('section');
    const marker = new ymaps3.YMapMarker({
        coordinates: [37.470427, 55.676080],
        draggable: true
    }, content);
    map.addChild(marker);
    content.innerHTML = '<h1>Этот заголовок можно переносить</h1>';
}