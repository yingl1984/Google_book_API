import React, { Component } from 'react';

class Book extends Component {
    static defaultProps={
        books:[]
    }
    
    render(){
        const book = this.props.books
                .map((book,i) => <Book {...book} key={i}/>);

        return(
            <div class="book">
                <h1>{book.volumeInfo.title}</h1>
            </div> 
        )
    }
}

export default Book