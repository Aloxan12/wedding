import './App.scss'
import {Header} from "./blocks/header/Header";
import {MapBlock} from "./blocks/map/Map";
import {Gifts} from "./blocks/gifts/Gifts";
import {Timer} from "./blocks/timer/Timer";
import {Descriptions} from "./blocks/descriptions/Descriptions";
import {Schedule} from "./blocks/schedule/Schedule";

function App() {

    return (
        <div className='app'>
            <Header/>
            <Descriptions />
            <h3 className='app-title'> Ждем вас! <br/>
                Ваши жених и невеста!</h3>
            <Timer />
            <Gifts />
            <Schedule />
            <MapBlock/>
        </div>
    )
}

export default App
