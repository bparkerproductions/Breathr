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
              <VideoItem
                key={video.etag}
                canAdd={props.canAdd}
                canRemove={props.canRemove}
                video={video}>
              </VideoItem>
            )
          })}
        </div>
      )
    }
    else {
      let noSearch = 'Nothing came up for your search. Maybe try again with a different term'
      let noCollection = 'You have nothing in your collection. Head over to the search bar and find some!'

      return (
        <div className="notification-card error">
          <p>{isCollection ? noCollection : noSearch}</p>
        </div>
      )
    }
  }

  function renderVideo() {
    let anyVideos = props.videos !== null

    if(props.searchResult && anyVideos) {
      return renderResults(props.videos)
    }
    else if(props.grabFromCollection) {
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