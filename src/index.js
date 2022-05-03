import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from './theme';

const Global = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-size:14px;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);