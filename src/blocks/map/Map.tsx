import {Placemark, Map, YMaps} from "@pbe/react-yandex-maps";

export const MapBlock = () => {
    const placemarkGeometry = [53.815017, 27.648694]; // Пример координат (широта, долгота)

    return (
        <div className='page map'>
            <div className='title-block'>
                <span className='title'>Локация</span>
                <span className='text'>усадьба форест</span>
            </div>
            <YMaps query={{
                lang: 'ru_RU'
            }}>
                <Map
                    width="100%"
                    height={300}
                    defaultState={{center: placemarkGeometry, zoom: 15}}
                >
                    <Placemark geometry={placemarkGeometry}/>
                </Map>
            </YMaps>
        </div>
    );
};