import React from 'react'
import { connect } from 'react-redux'

import VideoItem from './VideoItem'

const VideoResult = props => {
  function renderResults(loopObj, isCollection=false) {
    if (loopObj.length) {
      return (
        <div className="video-results">
          {loopObj.map(video => {
            return (
              <VideoItem key={video.etag} video={video}></VideoItem>
            )
          })}
        </div>
      )
    }
    else {
      const noSearch = 'Nothing came up for your search. Maybe try again with a different term'
      const noCollection = 'You have nothing in your collection. Head over to the search bar and find some!'

      return (
        <div className="notification-card error">
          <p>{isCollection ? noCollection : noSearch}</p>
        </div>
      )
    }
  }

  /**
   * This can render 3 states: Search results, collections, and the non search state
   */
  function renderVideo() {
    if (props.searchResult && (props.videos !== null)) {
      return renderResults(props.videos)
    }
    else if (props.grabFromCollection) {
      return renderResults(props.collectionVideos, true)
    }
    else {
      return (
        <div className="notification-card">
          <p>Type to search for videos...</p>
        </div>
      )
    }
  }

  return (
    <div>{renderVideo()}</div>
  )
}

const mapStateToProps = (state) => {
  return { collectionVideos: state.videos }
}

export default connect(mapStateToProps)(VideoResult)