// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
// Project imports
import App from './App';
import theme from './theme';
// UI imports
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';


// Base of the Create React App; wraps the project in a MUI theme
ReactDOM.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline standardizes CSS */}
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.querySelector('#root')
);
