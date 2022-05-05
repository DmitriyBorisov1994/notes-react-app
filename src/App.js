import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { AppWrapper } from './components/UI/AppWrapper';

function App() {

  const [currentTheme, setCurrentTheme] = useState('light')
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <AppWrapper currentTheme={currentTheme}>
      <Header currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Main currentTheme={currentTheme} />
    </AppWrapper >
  );
}

export default App;
