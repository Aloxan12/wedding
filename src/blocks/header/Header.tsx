import './Header.scss'
import HeaderPhoto from '../../assets/images/header.png'
import TextPhoto from '../../assets/images/text.png'
import {useEffect, useState} from "react";

export const Header = () => {
    return (
        <header className='page header'>
            <div className='title'><span>26 июля 2024 года</span></div>
            <div className='content'>
                <img src={TextPhoto} className='text' alt='' />
                <img src={HeaderPhoto} className='photo'  alt=''/>
            </div>
            <Timer />
        </header>
    );
}

const targetDate = new Date('2024-07-26T00:00:00');
const Timer = ()=>{
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return {
                weeks: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { weeks, days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [targetDate]);

        return <div className='timer'>
        <div className='item'>
            <span className='value'>{timeLeft.weeks}</span>
            <span className='desc'>недель</span>
        </div>
        <div className='item'>
            <span className='value'>{timeLeft.days}</span>
            <span className='desc'>дней</span>
        </div>
        <div className='item'>
            <span className='value'>{timeLeft.hours}</span>
            <span className='desc'>часов</span>
        </div>
        <div className='item'>
            <span className='value'>{timeLeft.minutes}</span>
            <span className='desc'>минут</span>
        </div>
            <div className='item'>
                <span className='value'>{timeLeft.seconds}</span>
                <span className='desc'>секунд</span>
            </div>
    </div>
}