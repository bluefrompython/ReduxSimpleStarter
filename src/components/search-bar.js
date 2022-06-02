import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: 'apple'};
    }



    render () {
        // this.state.term = event.target.value ? bad operation
        return (
            <div>
            <input value= {this.state.term} onChange={(event)=> this.setState({term: event.target.value})} />
            value={this.state.term}
        </div>);
        // return <input onChange={this.onInputChange}/>;
}
    
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

}

export default SearchBar;