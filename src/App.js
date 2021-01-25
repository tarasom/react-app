import { MuiThemeProvider } from '@material-ui/core/styles';
import {getTheme} from './themes';
import AppBar from "./components/AppBar";

function App() {
    const theme = getTheme('light');

    return (
        <MuiThemeProvider theme={theme}>
            <AppBar />
        </MuiThemeProvider>

    );
}

export default App;
