import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderAppBar from './components/Header';
import AppRouter from './routers/AppRouter';
import './styles/styles.css';
const App = () => (
    <MuiThemeProvider>
        <AppRouter />
    </MuiThemeProvider>
);
render(<App />, document.getElementById('app'));