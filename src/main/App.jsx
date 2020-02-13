import './App.css'
import React from 'react'
import Header from '../components/Header'
import Dice from '../components/Dice'
import d4 from '../assets/imgs/d4.png'
import d6 from '../assets/imgs/d6.png'
import d8 from '../assets/imgs/d8.png'
import d10 from '../assets/imgs/d10.png'
import d12 from '../assets/imgs/d12.png'
import d20 from '../assets/imgs/d20.png'
import percentage from '../assets/imgs/percentage.png'

export default props =>
    <React.Fragment>
        <Header />
        <div className="content">
            <Dice value={4} label="D4" img={d4} />
            <Dice value={6} label="D6" img={d6} />
            <Dice value={8} label="D8" img={d8} />
            <Dice value={10} label="D10" img={d10} />
            <Dice value={12} label="D12" img={d12} />
            <Dice value={20} label="D20" img={d20} />
            <Dice value={100} label="Dado de Porcentagem" img={percentage} />
        </div>
    </React.Fragment>