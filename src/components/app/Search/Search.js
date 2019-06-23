import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../../../apis/youtube';
import VideoResult from './VideoResult';
import _ from 'lodash';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResult: null,
      videos: null
    }

    this.updateSearchResult = this.updateSearchResult.bind(this);
    this.getVideoResults = _.debounce(this.getVideoResults.bind(this), 1000);
  }
  updateSearchResult(userInput) {
    this.setState({searchResult: userInput})
    this.getVideoResults();
  }
  async getVideoResults() {
    const response = await youtube.get('/search', {
      params: {
        q: this.state.searchResult + 'relaxing audio'
      }
    });

    this.setState({videos: response.data.items});
  }
  render() {
    return (
      <section id="video-search" className="column-center">
        <div className="inner-container">
          <SearchBar searchCallback={this.updateSearchResult}></SearchBar>
          <VideoResult searchResult={this.state.searchResult}
          videos={this.state.videos}></VideoResult>
        </div>
      </section>
    )
  }
}

export default Search;