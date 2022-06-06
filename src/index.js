import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search-bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const { divide } = require("lodash")

// Create a new component
const API_KEY = 'AIzaSyDZx2SLwmdBiIj9xX12LAQ6f46D_Mgp9vs';

YTSearch({key:API_KEY,term : 'surfboard'},function(data) {
    console.log(data);
});



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { videos : []
                    ,selectedVideo :null
                    };
        this.videoSearch('apple');
    }

    videoSearch(term){
        YTSearch({key:'AIzaSyDZx2SLwmdBiIj9xX12LAQ6f46D_Mgp9vs',term : term},(videos) => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]});
        });

    }

    
    render() { 
        const videoSearch = _.debounce((term)=> {this.videoSearch(term)},900);
        return (
            <div>
            <SearchBar onSearchTermChange={videoSearch}/> 
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}  />    
            </div>);}
};


ReactDom.render(<App />,
document.querySelector('.container') 
);
