import './Photos.scss'


export const Photos = () => {
    return (
        <div className='page photos-block'>
            <div className="photo-title">
                Фотографии
            </div>
            <div className='photo-description'>
                <p>Мы создали папку на Гугл Диске, где вы сможете поделиться своими фотографиями и видео. Там же через пару месяцев после свадьбы вы сможете скачать фотографии от нашего фотографа.</p>
            <div className='btns'>
                <a href='https://drive.google.com/drive/folders/1IpZgBTDM8vbICTPVpZfEXLW4ZHwvouhX?usp=drive_link' target='_blank' className='btn'>Ваши фото</a>
                <a  target='_blank' title='Ссылка появится позже' className='btn'>Фото от фотографа</a>
            </div>
            </div>
        </div>
    );
}