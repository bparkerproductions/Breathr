import React, {useState} from 'react'
import SearchBar from './SearchBar'
import youtube from '../../../helpers/apis/youtube'
import VideoResult from '../Video/VideoResult'
import ComponentControls from './../Controls/ComponentControls'

const Search = (props) => {
  const [searchResult, setSearchResult] = useState(null)
  const [videos, setVideos] = useState(null)

  function updateSearchResult(userInput) {
    setSearchResult(userInput)
    getVideoResults(userInput)
  }

  async function getVideoResults(q) {
    const url = `https://www.googleapis.com/youtube/v3/search?
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
    })
  }

  function getShowClasses() {
    let show = props.show && props.allToggled
    return show ? 'column-center ' : 'column-center hidden '
  }

  function getSearchedClasses() {
    return searchResult && (videos ? videos.length : false) ? 'searched ' : ''
  }

  function getVideoClasses() {
    return getShowClasses() + getSearchedClasses()
  }

  return (
    <section id="video-search" className={getVideoClasses()}>
      <div className="inner-container">
        <ComponentControls toggleType="search"></ComponentControls>
        <SearchBar searchCallback={updateSearchResult}></SearchBar>
        <VideoResult
          searchResult={searchResult}
          videos={videos}
          canAdd={true}>
        </VideoResult>
      </div>
    </section>
  )
}

export default Search