import React, {useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import SearchBar from '@/Components/SearchBar'
import VideoResult from '@/Components/VideoResult'
import ComponentControls from '@/Components/ComponentControls'
import { saveSearchedVideos } from '@/actions/videoList'
import { Card, Container } from '@mui/joy'

const Search = (props) => {
  const [searchResult, setSearchResult] = useState(null)
  const [videos, setVideos] = useState(null)
  const [boxHeight, setBoxHeight] = useState('auto')
  const [searchSuggestions, setSearchSuggestions] = useState([])
  const cardRef = useRef(null)

  useEffect(() => {
    if (cardRef.current) {
      setBoxHeight(cardRef.current.offsetHeight + "px")
    }
  }, [videos, searchSuggestions])

  /**
   * When a search is entered, this callback is called from the <SearchBar > Component.
   * Updates video results and sets new search result query
   */
  function updateSearchResult(userInput, type) {
    setSearchResult(userInput)

    if (type === 'search')
      getVideoResults(userInput)
    if (type === 'url')
      urlSearch(userInput)
  }

  /**
   * Fetch results from the YouTube API, set videos when results are returned
   */
  async function getVideoResults(q) {
    const url = `/youtube/search?q=${encodeURIComponent(q + ' audio')}`

    fetch(url)
    .then(response => response.json())
    .then(response => {
      setVideos(response.items)
      props.saveSearchedVideos(response.items)
    })
  }

  async function urlSearch(q) {
    const parseId = q.split('v=')[1]

    if (parseId) {
      const url = `/youtube/searchURL?id=${encodeURIComponent(parseId)}`

      fetch(url)
      .then(response => response.json())
      .then(response => {
        setVideos(response.items)
        saveSearchedVideos(response.items)
      })
    }
  }

  return (
    <Container
      component="section"
      id="video-search"
      sx={{
        marginY: { xs: 5, lg: 12.5 },
        height: boxHeight,
        transition: 'all 0.2s ease'
      }}
      className={!props.show && 'hidden'}
    >
      
      <Card ref={cardRef}>
        <ComponentControls toggleType="search"></ComponentControls>
        <SearchBar
          searchTermsChanged={suggestions => setSearchSuggestions(suggestions)}
          searchCallback={userInput => updateSearchResult(userInput, 'search')}
          urlSearchCallback={userInput => updateSearchResult(userInput, 'url')}
        />
        <VideoResult
          searchResult={searchResult}
          videos={videos}
          canAdd={true}
        />
      </Card>
        
    </Container>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {
  saveSearchedVideos,
})(Search)