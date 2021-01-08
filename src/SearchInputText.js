import React, { Component } from 'react';

class SearchInputText extends Component{
    constructor(props)
    {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        console.log("Ckicked!")
        this.props.sendrequest();
    };

    render(){
        return(
            <div>
                <h1>Google API book search</h1>
                <form action="#" onSubmit={this.props.sendrequest}>
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



            