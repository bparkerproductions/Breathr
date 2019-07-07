import React from 'react';
import { debounce } from 'lodash';

import SearchBar from './SearchBar';
import youtube from '../../../apis/youtube';
import VideoResult from '../Video/VideoResult';
import ComponentControls from './../Controls/ComponentControls';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResult: null,
      videos: null
    }

    this.updateSearchResult = this.updateSearchResult.bind(this);
    this.getVideoResults = debounce(this.getVideoResults.bind(this), 1000);
  }
  updateSearchResult(userInput) {
    this.setState({searchResult: userInput})
    this.getVideoResults();
  }
  async getVideoResults() {
    const response = await youtube.get('/search', {
      params: {
        q: this.state.searchResult + ' relaxing audio'
      }
    });

    this.setState({videos: response.data.items});
  }
  render() {
    if(this.props.show && this.props.allToggled) {
      return (
        <section id="video-search" className="column-center">
          <div className="inner-container">
            <ComponentControls toggleType="search"></ComponentControls>
            <SearchBar searchCallback={this.updateSearchResult}></SearchBar>
            <VideoResult
              searchResult={this.state.searchResult}
              videos={this.state.videos}
              canAdd={true}>
            </VideoResult>
          </div>
        </section>
      )
    }
    else return null;
  }
}

export default Search;