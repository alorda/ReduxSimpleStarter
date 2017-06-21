import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// in order to access the npm youtube-api-search
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCJ1GOCZWk7J6E44yZj1zRsgSNFjE8s2xc';

// Create a new component. This component should produce some HTML
// We changed App to class-based so it can keep track of video list; needs state.
class App extends Component {
    // constructor() is always called with props
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        // this is the initial search term on page load
        this.videoSearch('surfboards');
    }

    // at least for now, I prefer to have render() right after constructor()
    render() {
        // this is lodash, basically limits how frequently this.videoSearch can be called
        //                             function (term) { this.videoSearch(term)...}
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                {/* we pass a callback to SearchBar  */}
                {/* we pass a property, onSearchTermChange to SearchBar that calls videoSearch */}
                {/*  */}
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    // we're passing onVideoSelect as a callback to VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    // this is passing props to VideoList, parent to child
                    videos={this.state.videos}/>
            </div>
        );
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // this.setState({videos}) = this.setState({ videos: videos})
            this.setState({
                videos: videos,
                // grabs the first video from the 5 search results
                selectedVideo: videos[0]
            });
        });
    }
}

// Put that Component's generated HTML into the DOM
// You are passing an instance of App to the DOM (<App />)
ReactDOM.render(<App />, document.querySelector('.container'));
