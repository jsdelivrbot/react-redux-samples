import config from '../config';

// Libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import lodash from 'lodash';

// Components
import SearchBar from './components/search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('cats');
  }

  videoSearch(term) {
    YTSearch({ key: config.YT_API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = lodash.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => {
            this.setState({ selectedVideo: selectedVideo });
            // this.setState({selectedVideo})
          }}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Add this component's generated HTML to the DOM
// Pass an instance of App to render() to a target node
// in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
