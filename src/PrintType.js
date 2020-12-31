import React, { Component } from 'react';

class PrintType extends Component {
// uniq = [...new Set(array)];
changeSelection(value) {
  if(value === "All") {
    this.props.printTypeChangeHandler("All");
  } else {
    this.props.printTypeChangeHandler(value);
  }
}

render() {
  const tempOptions=this.props.books.map(book => book.volumeInfo.printType);
  const uniqu = [...new Set(tempOptions)];
  
    //  tempOptions = this
    //       .props
    //       .books
    //       .map(
    //         (book, i) => <option value={book.volumeInfo.printType} key={i}>{book.volumeInfo.printType}</option>
    //       );
    const options =uniqu.map((item,i) => <option key = {i}value={item}>{item}</option>);
    return (
      <div className="print_type">
        <form>
          <label htmlFor="printType">PrintType: </label>
          <select
            id="printType"
            name="printType"
            onChange={e => this.changeSelection(e.target.value)}>
            <option value="All">All</option>
            {options}
          </select>
        </form>
      </div>
    );      
  }
}
export default PrintType