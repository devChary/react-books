import React from 'react';
import BookList from './components/booklist/booklist.component';
import Navbar from './components/navbar/navbar.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
