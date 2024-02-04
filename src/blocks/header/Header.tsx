import './Header.scss'
import HeaderPhoto from '../../assets/images/header.png'

export const Header = () => {
    return (
        <header className='page header'>
            <div className='content'>
                <div className='text'>text</div>
                <img src={HeaderPhoto} className='photo' />
            </div>
            <div className='timer'>timer</div>
        </header>
    );
}