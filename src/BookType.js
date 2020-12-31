import React, { Component } from 'react';

class BookType extends Component {
// uniq = [...new Set(array)];
changeSelection(value) {
  if(value === "No Filter") {
    this.props.bookTypeChangeHandler("All");
  } else {
    this.props.bookTypeChangeHandler(value);
  }
}

render() {
    
    return (
      <div className="book_type">
        <form>
          <label htmlFor="bookType">BookType: </label>
          <select
            id="bookType"
            name="bookType"
            onChange={e => this.changeSelection(e.target.value)}>
            <option value="no_filter">No Filter</option>
            <option value="EBook">Ebook</option>
            <option value="paper">Paper</option>
          </select>
        </form>
      </div>
    );      
  }
}
export default BookType