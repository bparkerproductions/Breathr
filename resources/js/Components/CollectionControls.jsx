import React, { useState } from 'react'
import { connect } from 'react-redux'
import { router } from '@inertiajs/react'
import { setSnackbarOpen, setSnackbarMessage } from '@/actions'

import { removeFromCollection, addToCollection } from '@/actions/videoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const CollectionControls = props => {

   /**
   * Check if video already exists in collection
   */
   function doesVideoExist() {
    for (let i = 0; i < props.videos.length; i++) {
      if (props.videos[i].id.videoId === props.video.id.videoId) return true
    }

    return false
  }
  
   /**
   * Add a video to the collection if it exists, otherwise throw a warning message
   */
   function handleAdd(e) {
    e.stopPropagation()

    if (!doesVideoExist()) addToCollection()
    else {
      props.setSnackbarMessage('This video is already in your collection!')
    }
  }

  /**
   * Remove a video from a collection by calling the removeFromCollection action
   */
  function handleRemove(e) {
    e.stopPropagation()
    const videoID = props.video.id.videoId
    router.delete(`/collection/${videoID}`, {
      onSuccess: () => {
        props.removeFromCollection(videoID)

        props.setSnackbarOpen(true)
        props.setSnackbarMessage('Your video has successfully been removed from your collection!')
      },
      preserveScroll: true
    })
  }

  function addToCollection() {
    const data = {
      title: props.video.snippet.title,
      video_id: props.video.id.videoId,
      thumbnail_url: props.video.snippet.thumbnails.high.url,
      description: props.video.snippet.description
    }

    router.post('/collection/store', data, {
      onSuccess: () => {
        // Notify User
        props.addToCollection(props.video)
        props.setSnackbarOpen(true)
        props.setSnackbarMessage('New video has successfully been added to your collection!')
      },
      onError: () => {
        props.setSnackbarOpen(true)
        props.setSnackbarMessage('There was an error adding your video to the collection.')
      },
      preserveScroll: true
    })
  }

    return (
      <>
      {!doesVideoExist() ? 
        <FontAwesomeIcon
          icon={faPlusCircle}
          color="white"
          onClick={handleAdd}
        /> :

        <FontAwesomeIcon
          icon={faMinusCircle}
          color="red"
          onClick={handleRemove}
        />
      }
    </>
    )

}

const mapStateToProps = state => {
  return {
    videos: state.videos,
  }
}
  
export default connect(mapStateToProps, {
  removeFromCollection,
  addToCollection,
  setSnackbarOpen,
  setSnackbarMessage
})(CollectionControls)