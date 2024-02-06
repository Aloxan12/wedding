import './Schedule.scss'

export const Schedule = () => {
    return (
        <div className='page schedule'>
            <span className='schedule-title'>Свадебное расписание</span>
            <div className="schedule-list">
                <ScheduleItem time='15:30' title='Встреча гостей и фуршет' text='Вы сможете насладиться закусками, напитками и общением с гостями.' />
                <ScheduleItem time='16:00' title='Церемония' text='Мы будем рады разделить с Вами важный момент создания нашей семьи.' />
                <ScheduleItem time='17:00' title='Банкет' text='На праздничном ужине будет не только вкусно, но и очень весело. В программе вечера запланировано много танцев, развлечений и поздравлений.' />
                <ScheduleItem time='23:00' title='Завершение' text='Надеемся, этот праздник принесет вам массу положительных эмоций и запомнится на долгое время.' />
            </div>
        </div>
    );
};

interface ScheduleItem{
    title: string
    time: string
    text: string
}

const ScheduleItem = ({text, time, title}:ScheduleItem)=> <div className='schedule-item'>
    <div className="schedule-title-block">
        <div className="time">{time}</div>
        <div className="title">{title}</div>
    </div>
    <div className='schedule-text'>{text}</div>
</div>
