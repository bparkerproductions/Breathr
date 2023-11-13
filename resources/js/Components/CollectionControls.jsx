import React, { useState } from 'react'
import { connect } from 'react-redux'
import { router } from '@inertiajs/react';
import { removeFromCollection, addToCollection } from '@/actions/videoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Snackbar } from '@mui/joy'

const CollectionControls = props => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [color, setColor] = useState("neutral")

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

    setOpen(true)

    if (!doesVideoExist()) {
      addToCollection()
    }
    else {
      setColor("warning")
      setMessage('This video is already in your collection!')
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

        setColor("primary")
        setOpen(true)
        setMessage('Your video has successfully been removed from your collection!')
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
        setColor("success")
        setMessage('Your video has successfully been added to your collection!')
      },
      onError: () => {
        console.log('error')
        setColor("danger")
        setOpen(true)
        setMessage('There was an error adding your video to the collection.')
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

      <Snackbar
        autoHideDuration={1600}
        open={open}
        variant="soft"
        color={color}
        size="lg"
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        startDecorator={<FontAwesomeIcon icon={faCheckCircle} />}
        onClose={() => {setOpen(false)}}
        sx={{ marginBottom: 2, marginLeft: 2 }}
      >
      {message}
    </Snackbar>
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
  addToCollection
})(CollectionControls)