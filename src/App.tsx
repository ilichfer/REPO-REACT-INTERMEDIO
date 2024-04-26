import { Experimental_CssVarsProvider as CssVarsProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from './styles/Themes';
import Home from './page/Home';

const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
     <Home/>
    </ThemeProvider>
  );
}

export default App
