import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Material UI theming. We can define away from the default styling.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#51b7ae',
      main: '#26a69a',
      dark: '#1a746b',
      contrastText: '#fff'
    },
    secondary: {
      light: '#53c4f7',
      main: '#29b6f6',
      dark: '#1c7fac',
      contrastText: '#000'
    },
    error: {
      light: '#f50057',
      main: '#f50057',
      dark: '#f50057'
    }
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiButton: {
      outlined: {
        color: '#29b6f6',
        borderColor: '#29b6f6'
      }
    }
  }
});

/**
 * We wrap our App within the Material UI theme provider to allow all MUI comps to inherit our custom themes.
 */
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.register();
