import React from 'react';
import AtmPage from './components/atm-page';
import ThemeProvider from './providers/theme-provider';

function App() {
  return <>
    <ThemeProvider>
      <AtmPage/>
      <AtmPage/>
      <AtmPage/>
    </ThemeProvider>
  </>
}

export default App;
