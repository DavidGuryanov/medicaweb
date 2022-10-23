import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Onboarding from './screens/Onboarding';
import { darkTheme, lightTheme } from './utils/theme';
import './assets/fonts/font-face.css';
import GlobalStyles from './utils/globalStyles';

function Links() {
  return (
    <>
      <Link to="/">index</Link>
      <Link to="/onboarding">onboarding</Link>
      <Link to="/">index</Link>
      <div />
    </>
  );
}

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={themeToggler} type="button">
        Switch Theme
      </button>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                in dex
                <Links />
              </div>
            }
          />
          <Route path="onboarding" element={<Onboarding />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
