import {Placemark, Map, YMaps} from "@pbe/react-yandex-maps";

export const MapBlock = () => {
    const placemarkGeometry = [53.815017, 27.648694]; // Пример координат (широта, долгота)

    return (
        <div className='page map'>
            <div className='title-block'>
                <span className='title'>Локация</span>
                <span className='text'><span className='extra'>Мы решили провести свадебный день в усадьбе Forest!</span>
Минский р-н, агр.гор Новый
Двор, ул. Лесная д.1</span>
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