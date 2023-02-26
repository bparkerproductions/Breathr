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
      props.urlSearchCallback()
    else
      props.searchCallback(searchQuery)
  }

  function updateSearchQuery(event) {
    setSearchQuery(event.target.value)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') trackInput()
  }

  function getPlaceholder() {
    return searchingByUrl ? 'Enter Youtube URL' : 'Search videos'
  }

  function inputType() {
    return searchingByUrl ? 'url' : 'text'
  }

  function onUrlSearch() {
    setSearchingByUrl(!searchingByUrl)
    props.urlSearchCallback()
  }

  return (
    <div className="search-input-container d-flex">
      <div className="search-icon d-flex align-items-center me-3 text-white ui-button" onClick={trackInput}>
        <i className="fas fa-search fa-lg"></i>
      </div>
      <div onClick={onUrlSearch} className="ui-button d-flex align-items-center">
        <i className={`fab fa-youtube-square fa-lg pe-2 ${searchingByUrl ? 'text-danger' : 'text-white'}`} title="Search video by YouTube URL"></i>
      </div>
      <div className="search-input w-100">
        <form onSubmit={ e => e.preventDefault() } className="w-100">
          <input 
            type={inputType()}
            className="w-100"
            placeholder={getPlaceholder()}
            onKeyDown={handleKeyDown}
            onChange={updateSearchQuery}
          />
        </form>
      </div>
    </div>
  )
}

export default SearchBar