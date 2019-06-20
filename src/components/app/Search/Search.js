import React from 'react';
import SearchBar from './SearchBar';
import VideoResults from './VideoResults';

class Search extends React.Component {
  render() {
    return (
      <section id="video-search" className="column-center">
        <div className="inner-container">
          <SearchBar></SearchBar>
          <VideoResults></VideoResults>
        </div>
      </section>
    )
  }
}

export default Search;