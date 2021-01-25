import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#b2f6ae',
            dark: '#1a431f',
        },
        secondary: {
            main: '#E1F1FF',
        },
        error: {
            main: '#FF3D00',
        },
        warn: {
            light: '#FFB300',
        }
    }
});

export default theme;