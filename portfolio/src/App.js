import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const backgroundColor = darkMode ? "#191919" : "#ffffff"

  function switchDarkMode() {
    setDarkMode(prev => !prev)
  }

  return (
    <div className="App" style={{backgroundColor: backgroundColor}}>
      <Header 
        darkMode={darkMode} switchDarkMode={switchDarkMode} 
      />
    </div>
  );
}

export default App;
