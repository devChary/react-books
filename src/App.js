import React from 'react';
import BookList from './components/booklist/booklist.component';
import Navbar from './components/navbar/navbar.component';
import ThemeContextProvider from './contexts/ThemeContext';

import './App.css';
import ThemeToggle from './components/theme-toggle/theme-toggle.component';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
