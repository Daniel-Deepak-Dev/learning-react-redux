import React from "react";
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import { API_KEY } from './api';
console.log(API_KEY);


const App = () => {
    return <div><SearchBar/>s</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));