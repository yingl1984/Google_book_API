import React, { Component } from 'react';
import Book from './Book'

class BookList extends Component {
    
    render(){
        const book = this.props.books
                .map((book,i) => <Book {...book} key={i}/>);

        return(
            <div class="bookList">
                {book}
            </div> 
        )
    }
}

export default BookList