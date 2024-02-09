import './Descriptions.scss'
import photo from '../../assets/images/photo2.png'

export const Descriptions = () => {
    return (
        <div className='page descriptions'>
            <h3>Дорогой <br/> гость!</h3>
            <p>Мы рады сообщить Вам, что 26.07.2024 состоится самое главное торжество в нашей жизни - день нашей свадьбы! Приглашаем Вас разделить с нами радость этого незабываемого дня!</p>
            <img src={photo} alt='' className='photo'/>
        </div>
    );
}