// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
// Project imports
import App from './App';
import { theme } from './theme';
import { store } from 'flux';
// UI imports
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

// Base of the Create React App; wraps the project in a MUI theme
ReactDOM.render(
    <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
            {/* CssBaseline standardizes CSS */}
            <CssBaseline />
            <App />
        </ThemeProvider>
    </StoreProvider>,
    document.querySelector('#root')
);
