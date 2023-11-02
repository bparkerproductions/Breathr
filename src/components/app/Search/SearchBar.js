import React, {useState} from 'react'
import SearchSuggestions from './SearchSuggestions'
import { Box, Stack, Input, Tooltip } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

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
    console.log(event)
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
      <Stack direction="row" alignItems="center" sx={{ marginTop: 1 }}>
          
          <Tooltip title="Search By YouTube URL" variant="solid">
            <Box
              sx={{ cursor: 'pointer', marginRight: 1 }}
              onClick={() => setSearchingByUrl(!searchingByUrl)}
            >
              <FontAwesomeIcon
                icon={faYoutubeSquare}
                size="2xl"
                color={searchingByUrl ? '#F60000' : 'black'}
              />
            </Box>
          </Tooltip>
          
            <Input
              startDecorator={
                <FontAwesomeIcon
                  icon={faSearch}
                  onClick={trackInput}
                />
              }
              onKeyDown={handleKeyDown}
              type={searchingByUrl ? 'url' : 'text'}
              variant="soft"
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
              placeholder={searchingByUrl ? 'Enter Youtube URL' : 'Search videos'}
              sx={{ width: '100%' }}
            />
      </Stack>
    </Box>
  )
}

export default SearchBar