import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import TechStack from './components/TechStack/TechStack';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const backgroundColor = darkMode ? "#191919" : "#F5F5F5"

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
