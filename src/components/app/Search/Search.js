import React, {useState} from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import youtube from '../../../helpers/apis/youtube'
import VideoResult from '../Video/VideoResult'
import ComponentControls from './../Controls/ComponentControls'
import { saveSearchedVideos } from './../../../actions/videoList'

const Search = (props) => {
  const [searchResult, setSearchResult] = useState(null)
  const [videos, setVideos] = useState(null)

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

  /**
   * searchedClasses: if search result and videos are true, add 'searched' class
   * showClasses: set hidden based on whether the component is toggled or not
   */
  function getVideoClasses() {
    const searchedClasses = searchResult && (videos ? 'searched ' : '')
    const showClasses = (props.show && props.allToggled) ? 'column-center ' : 'column-center hidden '
    return showClasses + searchedClasses
  }

  return (
    <section id="video-search" className={`${getVideoClasses()} mt-5`}>
      <div className="container">
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
        
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {
  saveSearchedVideos,
})(Search)