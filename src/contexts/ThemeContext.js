import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        lightTheme: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        darkTheme: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }
    render() {
        return (
            <ThemeContext.Provider>

            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;