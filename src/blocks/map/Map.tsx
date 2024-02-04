import {Placemark,Map, YMaps} from "@pbe/react-yandex-maps";

export const MapBlock = () => {
    const placemarkGeometry = [53.814990, 27.661688]; // Пример координат (широта, долгота)

    return (
        <YMaps query={{
            lang: 'ru_RU'
        }}>
            <Map
                width="100%"
                height={300}
                defaultState={{ center: placemarkGeometry, zoom: 15 }}
            >
                <Placemark geometry={placemarkGeometry} />
            </Map>
        </YMaps>
    );
};