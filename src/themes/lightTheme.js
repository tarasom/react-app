import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#2288FF',
            dark: '#0042C1',
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