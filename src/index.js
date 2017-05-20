import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCJ1GOCZWk7J6E44yZj1zRsgSNFjE8s2xc';
// Create a new component. This component should produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

// Put that Component's generated HTML into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
