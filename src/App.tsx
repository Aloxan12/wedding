import './App.scss'
import {Header} from "./blocks/header/Header";
import {MapBlock} from "./blocks/map/Map";

function App() {

    return (
        <div className='app'>
            <Header/>
            <div className='page gifts'>подарки</div>
            <div className='page schedule'>рассписание</div>
            <MapBlock/>
        </div>
    )
}

export default App
