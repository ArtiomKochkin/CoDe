export default function showMap() {
    const initMap = () => {
        let myMap = new ymaps.Map("map", {
            center: [55.028894, 82.926493],
            zoom: 15
        });

        myMap.geoObjects
            .add(new ymaps.Placemark([55.028894, 82.926493], {
                iconCaption: 'Депутатская улица, 46'
            }, {
                preset: 'islands#icon',
                iconColor: '#F15525',
                iconCaptionMaxWidth: '150',
            }));
    }

    ymaps.ready(initMap);
}