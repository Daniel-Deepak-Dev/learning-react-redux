import React from "react";
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import { API_KEY } from './api';
import VideoList from './components/video_list';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={ videos:[] }
        YTSearch({key:API_KEY,term:'mensutra'}, videos=>{
            this.setState({videos});
            //this.setState({videos/*name of key in state*/:videos/*data obtained from arg of the arrow function */})
            // can rewrite videos:videos as videos
        })
}
    render(){
        return  <div>
                    <SearchBar  />
                    <hr/>
                    <VideoList videoProp={this.state.videos}/>
                </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));