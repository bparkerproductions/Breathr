import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../../../apis/youtube';
import _ from 'lodash';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResult: null
    }

    this.updateSearchResult = this.updateSearchResult.bind(this);
    this.getVideoResults = _.debounce(this.getVideoResults.bind(this), 1000);
  }
  updateSearchResult(userInput) {
    this.setState({searchResult: userInput})
    this.getVideoResults();
  }
  async getVideoResults() {
    youtube.get('/search', {
      params: {
        q: this.state.searchResult
      }
    })
  }
  renderResults() {
    if(this.state.searchResult) {
      return (
        <div className="video-results">
          <p>Video results here</p>
        </div>
      )
    }
    else {
      return <p>Search Video...</p>
    }
  }
  render() {
    return (
      <section id="video-search" className="column-center">
        <div className="inner-container">
          <SearchBar searchCallback={this.updateSearchResult}></SearchBar>
          {this.renderResults()}
        </div>
      </section>
    )
  }
}

export default Search;