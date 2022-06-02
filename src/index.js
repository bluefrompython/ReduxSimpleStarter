import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search-bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
const { divide } = require("lodash")

// Create a new component
const API_KEY = 'AIzaSyD7-Ee-paRei7iDUw91r8Nu6MaT2x2BPvs';

YTSearch({key:API_KEY,term : 'surfboard'},function(data) {
    console.log(data);
});



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { videos : []};
        YTSearch({key:API_KEY,term : 'surfboard'},(videos) => {
            this.setState({videos});
        });
    }

    render() { 
        return (
            <div>
            <SearchBar/> 
            
            <VideoList videos={this.state.videos}  />    
            </div>);}
};


ReactDom.render(<App />,
document.querySelector('.container') 
);
