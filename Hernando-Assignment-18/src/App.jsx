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
        <div>
            <button 
                style={{
                    backgroundColor: '#4CAF50', /* Green */
                    border: 'none',
                    color: 'white',
                    padding: '15px 32px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                    margin: '4px 2px',
                    cursor: 'pointer'
                }}
                onClick={handleClick}>
                Tampilkan
            </button>
            {isShown && (
                <p style={{
                    color: 'blue',
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>Your Name</p>
            )}
        </div>
    );
}

export default App;
