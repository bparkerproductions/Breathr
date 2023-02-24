import React, {useState} from 'react'

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState('')

  /**
   * Call the search callback, the logic to rerender the videos with new results
   * is in the parent <Search /> component
   */
  function trackInput() {
    props.searchCallback(searchQuery)
  }

  function updateSearchQuery(event) {
    setSearchQuery(event.target.value)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') trackInput()
  }

  return (
    <div className="search-input-container d-flex">
      <div className="search-icon d-flex align-items-center me-3 text-white ui-button" onClick={trackInput}>
        <i className="fas fa-search fa-lg"></i>
      </div>
      <div className="search-input w-100">
        <form onSubmit={ e => e.preventDefault() } className="w-100">
          <input 
            type="text"
            className="w-100"
            onKeyDown={handleKeyDown}
            onChange={updateSearchQuery}
          />
        </form>
      </div>
    </div>
  )
}

export default SearchBar