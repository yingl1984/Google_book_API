import React, { Component } from 'react';
import SearchInputText from './SearchInputText';
import  PrintType from './PrintType';  
import  BookType from './BookType'; 
import BookList from './BookList';

const baseURL='https://www.googleapis.com/books/v1/volumes';
const apiKey='AIzaSyBncWvj_yIvRPeTK2mv_Ef35uytGV2QiwE';

class BookSearchApp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchTerm:'',
            books: [],
            selectedPrintType:null,
            selectedBookType:null
        };
    }
 
    generateURL(params){
        const queryItems = Object.keys(params)
        .map(key => {
          if(!encodeURIComponent(params[key])){
            return `${encodeURIComponent(key)}=''` 
          }else{
            return `${encodeURIComponent(key)}= ${encodeURIComponent(params[key])}`
          }
        })
        return queryItems.join('&');
    }
    sendRequest() {
      const params={
        q:this.state.searchTerm,
        key:apiKey
    };
    
    const url = baseURL + '?'+this.generateURL(params);
    console.log(url);
    debugger;
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          books:data.items
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    }
    
      updateSearchTerm(term) {
        this.setState({
          searchTerm: term
        })
      }

      handlerPrintTypeChange(term) {
        this.setState({
          selectedPrintType: term
        })
      }


      handlerBookTypeChange(item){
        this.setState({
          selectedBookType:item
        })
      }

      render(){
        
        return(
          <div>  
          <SearchInputText 
            searchTerm={this.state.searchTerm}
            handleUpdate={term=>this.updateSearchTerm(term)}
            sendRequest={()=>this.sendRequest}
          />
          <PrintType 
          books={this.state.books}
          printTypeChangeHandler={term => this.handlerPrintTypeChange(term)}
          />
          <BookType 
          books={this.state.books}
          bookTypeChangeHandler={term => this.handlerBookTypeChange(term)}
          />
          {/* <BookList books={this.state.books} 
                    bookType={this.state.selectedBookType}
                    printType={this.state.selectedPrintType} 
          /> */}
        </div>
        )
      }
}

export default BookSearchApp
