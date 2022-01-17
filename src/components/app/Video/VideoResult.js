import React from 'react'
import { connect } from 'react-redux'

import VideoItem from './VideoItem'

class VideoResult extends React.Component {
  renderResults(loopObj, isCollection=false) {
    if(loopObj.length) {
      return (
        <div className="video-results">
          {loopObj.map(video => {
            return (
              <VideoItem
                key={video.etag}
                canAdd={this.props.canAdd}
                canRemove={this.props.canRemove}
                video={video}>
              </VideoItem>
            )
          })}
        </div>
      )
    }
    else {
      let noSearch = 'Nothing came up for your search :( Maybe try again with a different term'
      let noCollection = 'You have nothing in your collection :( Head over to the search bar and find some!'

      return (
        <div className="notification-card error">
          <p>{isCollection ? noCollection : noSearch}</p>
        </div>
      )
    }
  }
  render() {
    let anyVideos = this.props.videos !== null

    if(this.props.searchResult && anyVideos) {
      return this.renderResults(this.props.videos)
    }
    else if(this.props.grabFromCollection) {
      return this.renderResults(this.props.collectionVideos, true)
    }
    else {
      return (
        <div className="notification-card">
          <p>Type to search for videos...</p>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { collectionVideos: state.videos }
}

export default connect(mapStateToProps)(VideoResult)