import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import './App.css';
import { Header } from './components';
import MainPage from './pages/main-page';

function App() {
  // const [mode, setMode] = useState<boolean>(true);

  // console.log(mode)

  // const lightTheme = createTheme({
  //   palette: {
  //     mode: 'light',
  //   },
  // });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#181E29' },
    },
    typography: {},
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
