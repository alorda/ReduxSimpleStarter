import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />;
// }

// this class is a plain JB object
// all class-based must have render() method
// must return JSX
// class SearchBar  extends React.Component {, see line 1
class SearchBar  extends Component {
    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }

}

export default SearchBar;
