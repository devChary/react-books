import React, { Component } from 'react';
import './booklist.style.css';

class BookList extends Component {
    render() { 
        return (  
            <div className='book-list'>
                <p>Hannibal Part 1</p>
                <p>Hannibal Part 2</p>
                <p>Hannibal Part 3</p>
            </div>
        );
    }
}
 
export default BookList;