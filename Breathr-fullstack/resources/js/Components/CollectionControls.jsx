import React from 'react'
import { NotificationManager } from 'react-notifications'
import { connect } from 'react-redux'
import { removeFromCollection, addToCollection } from '@/actions/videoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const CollectionControls = props => {
   /**
   * Check if video already exists in collection
   */
   function doesVideoExist() {
    for (let i = 0; i < props.videos.length; i++) {
      const videoID = props.videos[i].id.videoId
      const selectedVideoID = props.video.id.videoId

      if (videoID === selectedVideoID) return true
    }

    return false
  }
  
   /**
   * Add a video to the collection if it exists, otherwise throw a warning message
   */
   function handleAdd(e) {
    e.stopPropagation()

    if (!doesVideoExist()) {
      props.addToCollection(props.video)

      let successMessage = 'Your video has successfully been added to your collection!'
      NotificationManager.success(successMessage, 'Video Added!', 2000)
    }
    else {
      let warningMessage = 'This video is already in your collection!'
      NotificationManager.warning(warningMessage, false, 2000)
    }
  }

  /**
   * Remove a video from a collection by calling the removeFromCollection action
   */
  function handleRemove(e) {
    e.stopPropagation()
    let videoID = props.video.id.videoId
    props.removeFromCollection(videoID)

    let successMessage = 'Your video has successfully been removed from your collection!'
    NotificationManager.success(successMessage, 'Video Removed!', 2000)
  }

  if (!doesVideoExist()) {
    return <FontAwesomeIcon
      icon={faPlusCircle}
      color="white"
      onClick={handleAdd}
    />
  }
  else {
    return <FontAwesomeIcon
      icon={faMinusCircle}
      color="red"
      onClick={handleRemove}
    />
  }
}

const mapStateToProps = state => {
  return {
    videos: state.videos,
  }
}
  
export default connect(mapStateToProps, {
  removeFromCollection,
  addToCollection
})(CollectionControls)