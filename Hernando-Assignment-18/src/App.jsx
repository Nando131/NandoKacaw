import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';

function App() {
  const [showName, setShowName] = useState(false);

  const toggleName = () => {
    setShowName(!showName);
  };

  return (
    <div>
      <button onClick={toggleName}>Show/Hide Name</button>
      {showName && <p>Your Name</p>}
    </div>
  );
}

export default ToggleName;
