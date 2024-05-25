import './App.scss'
import {Header} from "./blocks/header/Header";
import {MapBlock} from "./blocks/map/Map";
import {Gifts} from "./blocks/gifts/Gifts";
import {Timer} from "./blocks/timer/Timer";
import {Descriptions} from "./blocks/descriptions/Descriptions";
import {Schedule} from "./blocks/schedule/Schedule";
import {Photos} from "./blocks/photos/Photos";

function App() {

    return (
        <div className='app'>
            <Header/>
            <Descriptions />
            <h3 className='app-title'> Ждем вас! <br/>
                26.07.2024</h3>
            <Timer />
            <Gifts />
            {/*<DressCode />*/}
            <Schedule />
            <Photos />
            <MapBlock/>
        </div>
    )
}

export default App
