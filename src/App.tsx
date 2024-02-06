import './App.scss'
import {Header} from "./blocks/header/Header";
import {MapBlock} from "./blocks/map/Map";
import {Gifts} from "./blocks/gifts/Gifts";
import {Timer} from "./blocks/timer/Timer";
import {Descriptions} from "./blocks/descriptions/Descriptions";

function App() {

    return (
        <div className='app'>
            <Header/>
            <Descriptions />
            <h3 className='app-title'> Ждем вас! <br/>
                Ваши жених и невеста!</h3>
            <Timer />
            <Gifts />
            <div className='page schedule'>рассписание</div>
            <MapBlock/>
        </div>
    )
}

export default App
