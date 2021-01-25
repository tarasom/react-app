import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const themes = {
    [LIGHT_THEME]: lightTheme,
    [DARK_THEME]: darkTheme,
};

const getTheme = theme => themes[theme];

export {
    LIGHT_THEME,
    DARK_THEME,
    getTheme
};