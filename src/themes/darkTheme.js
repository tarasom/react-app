import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#2288FF',
            dark: 'rgba(34, 136, 255, 0.92)',
        },
        secondary: {
            main: '#8797A6',
        },
        error: {
            main: '#FF3D00',
        },
        warn: {
            light: '#FFB300',
        },
        success: {
            main: '#23B87A',
            dark: 'rgb(41, 214, 142)',
        },
        grey: {
            50: '#393E4A',
            100: 'transparent',
            200: '#272222',
            300: '#7A8AA9',
            400: '#60687B',
            500: '#BDBDBD',
            700: '#FFF',
            900: '#FFF',
            A200: '#393E4A',
            A300: '#20232A',
        }
    }
});

export default theme;