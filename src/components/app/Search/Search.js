import React from 'react';
import SearchBar from './SearchBar';
import VideoResults from './VideoResults';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearching: false
    }
  }
  render() {
    return (
      <section id="video-search" className="column-center">
        <div className="inner-container">
          <SearchBar></SearchBar>
          <VideoResults isSearching={this.state.isSearching}></VideoResults>
        </div>
      </section>
    )
  }
}

export default Search;