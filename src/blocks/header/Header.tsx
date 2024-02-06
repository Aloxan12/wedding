import './Header.scss'
import HeaderPhoto from '../../assets/images/header.png'
import TextPhoto from '../../assets/images/text.png'

export const Header = () => {
    return (
        <header className='page header'>
            <div className='title'><span>26 июля 2024 года</span></div>
            <div className='content'>
                <img src={TextPhoto} className='text' alt='' />
                <img src={HeaderPhoto} className='photo'  alt=''/>
            </div>
        </header>
    );
}