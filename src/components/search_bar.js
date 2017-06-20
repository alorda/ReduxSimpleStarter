import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />;
// }

// this class is a plain JB object
// all class-based must have render() method
// must return JSX
// class SearchBar  extends React.Component {, see line 1
class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: ''};
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
             </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
