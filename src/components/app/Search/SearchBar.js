import React, {useState} from 'react'
import SearchSuggestions from './SearchSuggestions'
import { Box } from '@mui/joy'

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchedQuery, setSearchedQuery] = useState('')
  const [searchingByUrl, setSearchingByUrl] = useState(false)

  /**
   * Call the search callback, the logic to rerender the videos with new results
   * is in the parent <Search /> component
   */
  function trackInput() {
    // Set this value once the value is actually searched
    setSearchedQuery(searchQuery)

    if (searchingByUrl)
      props.urlSearchCallback(searchQuery)
    else
      props.searchCallback(searchQuery)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') trackInput()
  }

  /**
   * A value was passed down from searchSuggestions, populate and search for it
   */
  function populateSearchFromSuggestion(word) {
    if (searchingByUrl) return

    setSearchQuery(word)
    props.searchCallback(word, 'search')
  }

  return (
    <Box className="search-input-container">
      <SearchSuggestions 
        fill={populateSearchFromSuggestion}
        searchChanged={searchedQuery}
      />
      <div className="d-flex">
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
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
            />
          </form>
        </div>
      </div>
    </Box>
  )
}

export default SearchBar