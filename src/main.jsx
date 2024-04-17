import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { ThemeProvider } from 'styled-components';
import theme from './pages/theme/Theme.js';
import GlobalStyles from './pages/theme/GlobalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
