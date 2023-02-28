import React, {useState} from 'react'

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchingByUrl, setSearchingByUrl] = useState(false)

  /**
   * Call the search callback, the logic to rerender the videos with new results
   * is in the parent <Search /> component
   */
  function trackInput() {
    if (searchingByUrl)
      props.urlSearchCallback(searchQuery)
    else
      props.searchCallback(searchQuery)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') trackInput()
  }

  return (
    <div className="search-input-container d-flex">
      <div className="search-icon d-flex align-items-center me-3 text-white ui-button" onClick={trackInput}>
        <i className="fas fa-search fa-lg"></i>
      </div>
      <div 
        onClick={() => setSearchingByUrl(!searchingByUrl)}
        className="ui-button d-flex align-items-center"
      >
        <i className={`fab fa-youtube-square fa-lg pe-2 ${searchingByUrl ? 'text-danger' : 'text-white'}`} title="Search video by YouTube URL"></i>
      </div>
      <div className="search-input w-100">
        <form onSubmit={ e => e.preventDefault() } className="w-100">
          <input 
            type={searchingByUrl ? 'url' : 'text'}
            className="w-100"
            placeholder={searchingByUrl ? 'Enter Youtube URL' : 'Search videos'}
            onKeyDown={handleKeyDown}
            onChange={event => setSearchQuery(event.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default SearchBar