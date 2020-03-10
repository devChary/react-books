import React, { Component } from 'react';
import { ThemeContext } from './../../contexts/ThemeContext';

import './navbar.style.css';

class Navbar extends Component {

    render() {

        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, lightTheme, darkTheme } = context;
                const theme = isLightTheme ? lightTheme : darkTheme;

                return (
                    <div className="navbar" style={{ background: theme.ui, color: theme.syntax }}>
                        <header>
                            <h2>Books Context App</h2>
                        </header>
                        <nav>
                            <ul className="navbar-items">
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </div>
                )
            }}

            </ThemeContext.Consumer>

        );
    }
}

export default Navbar;