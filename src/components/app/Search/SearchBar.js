import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-input-container">
        <div className="search-icon">
          <i class="fas fa-search"></i>
        </div>
        <div class="search-input">
          <input type="test"></input>
        </div>
      </div>
    )
  }
}

export default SearchBar;