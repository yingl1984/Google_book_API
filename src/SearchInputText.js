import React, { Component } from 'react';

class SearchInputText extends Component{
    handleSubmit(e){
        e.preventDefault();
        this.props.sendrequest();
    };

    render(){
        return(
            <div>
                <h1>Google API book search</h1>
                <form>
                <input
                    placeholder="Search term"
                    value={this.props.searchTerm}
                    onChange={e => this.props.handleUpdate(e.target.value)}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchInputText



            