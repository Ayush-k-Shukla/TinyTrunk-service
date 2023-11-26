import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import './App.css';
import { Header } from './components';
import MainPage from './pages/main-page';

function App() {
  const [mode, setMode] = useState<boolean>(true);

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#181E29' },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
