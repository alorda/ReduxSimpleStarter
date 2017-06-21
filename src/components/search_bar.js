import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />;
// }

// this class is a plain JB object
// all class-based must have render() method
// must return JSX
// class SearchBar  extends React.Component {, see line 1
// gives SearchBar all of the functionality of Component
class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: ''};
        // Make sure you use this.setState() when outside the constructor
    }
    // every class must have a 'render' function
    render() {
        return (
            <div className="search-bar">
                {/* // We want our state to tell the input what its value should be
                // input is now a 'controlled component'; */}
                <input
                    placeholder="What do you want to see?"
                    value={this.state.term}
                    // the input's value hasn't changed; the event>target>value is setting the state which then sets the input value
                    onChange={event => this.onInputChange(event.target.value)} />
             </div>
        );
    }

    onInputChange(term) {
        // { term: term }
        this.setState({term});
        // this was passed to props by index.js
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
