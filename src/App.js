import React, { useState } from 'react';
import styled from 'styled-components'
import Header from './components/Header';
import Main from './components/Main';

const AppWrapper = styled.div`
width:100%;
min-height:100vh;
background:${props => props.currentTheme === 'light' ? props.theme.colors.bg.light : props.theme.colors.bg.dark};
`

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
