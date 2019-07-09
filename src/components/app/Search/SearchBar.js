import React from 'react';

const SearchBar = (props) => {
  function trackInput(event) {
    props.searchCallback(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="search-input-container">
      <div className="search-icon">
        <i className="fas fa-search"></i>
      </div>
      <div className="search-input">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={trackInput}></input>
        </form>
      </div>
    </div>
  )
}

export default SearchBar;