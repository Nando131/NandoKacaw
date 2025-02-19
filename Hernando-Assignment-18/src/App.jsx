import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';

function App() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(!isShown);
    };

    return (

        <div className='container'>
        <div className='taoggle-button'>
            <button className='name' onClick={handleClick}>Tampilkan</button> {isShown && <p>Your Name </p>}
        </div>
        </div>
    );
}

export default App;
