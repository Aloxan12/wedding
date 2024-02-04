import { useState } from 'react'
import './App.scss'
import {Header} from "./blocks/header/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
        <Header />
      <div className='page gifts'>подарки</div>
      <div className='page schedule'>рассписание</div>
      <div className='page map'>катра</div>
    </div>
  )
}

export default App
