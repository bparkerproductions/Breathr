import React, {useEffect, useState, useRef} from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import youtube from '../../../helpers/apis/youtube'
import VideoResult from '../Video/VideoResult'
import ComponentControls from './../Controls/ComponentControls'
import { saveSearchedVideos } from './../../../actions/videoList'
import { Card, Container } from '@mui/joy'

const Search = (props) => {
  const [searchResult, setSearchResult] = useState(null)
  const [videos, setVideos] = useState(null)
  const [boxHeight, setBoxHeight] = useState('auto')
  const cardRef = useRef(null)

  useEffect(() => {
    if (cardRef.current) {
      setBoxHeight(cardRef.current.offsetHeight + "px")
    }
  }, [videos])

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
    const url = `${youtube.base}/search?
    part=${youtube.part}&
    maxResults=${youtube.maxResults}&
    videoEmbeddable=${youtube.videoEmbeddable}&
    type=${youtube.type}&
    videoDefinition=${youtube.videoDefinition}&
    videoDuration=${youtube.videoDuration}&
    q=${q + ' audio'}&
    key=${youtube.key}`
    .replace(/\s/g, '')

    fetch(url)
    .then(response => response.json())
    .then(response => {
      setVideos(response.items)
      saveSearchedVideos(response.items)
    })
  }

  async function urlSearch(q) {
    const parseId = q.split('v=')[1]

    if (parseId) {
      const url = `${youtube.base}/videos?
      id=${parseId}&
      part=${youtube.part}&
      key=${youtube.key}`
      .replace(/\s/g, '')

      fetch(url)
      .then(response => response.json())
      .then(response => {
        setVideos(response.items)
        saveSearchedVideos(response.items)
      })
    }
  }


  function getVideoClasses() {
    if ( !(props.show && props.allToggled) ) return 'hidden'
  }

  return (
    <Container
      component="section"
      id="video-search"
      sx={{
        marginY: 12.5,
        height: boxHeight,
        transition: 'all 0.2s ease'
      }}
      className={getVideoClasses()}
    >
      
      <Card ref={cardRef}>
        <ComponentControls toggleType="search"></ComponentControls>
        <SearchBar 
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