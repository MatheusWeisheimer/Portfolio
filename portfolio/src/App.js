import './App.css';

import { useState } from 'react';

import Home from './components/Home/Home';
import Header from './components/Header/Header'
import TechStack from './components/TechStack/TechStack'
import Projects from './components/Projects/Projects';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const backgroundColor = darkMode ? "#191919" : "#ffffff"

  function switchDarkMode() {
    setDarkMode(prev => !prev)
  }

  return (
    <div className="App" style={{backgroundColor: backgroundColor}}>
      <Header 
        darkMode={darkMode} switchDarkMode={switchDarkMode} 
      />
      <Home darkMode={darkMode}/>
      <TechStack darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
    </div>
  );
}

export default App;
