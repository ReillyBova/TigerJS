import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#7e57c2',
        },
        secondary: {
            main: '#f58025',
        },
        background: {
            default: '#333333',
        },
        contrastThreshold: 2,
    },
});

export default theme;
