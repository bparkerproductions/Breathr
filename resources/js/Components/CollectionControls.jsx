import React, { useState } from 'react'
import { connect } from 'react-redux'
import { removeFromCollection, addToCollection } from '@/actions/videoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Snackbar } from '@mui/joy'

const CollectionControls = props => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [color, setColor] = useState("")

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

    setOpen(true)

    if (!doesVideoExist()) {
      props.addToCollection(props.video)

      setColor("success")
      setMessage('Your video has successfully been added to your collection!')
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
    let videoID = props.video.id.videoId
    props.removeFromCollection(videoID)

    setColor("primary")
    setOpen(true)
    setMessage('Your video has successfully been removed from your collection!')
  }

  function getIcon() {
    if (!doesVideoExist()) {
      return <FontAwesomeIcon
        icon={faPlusCircle}
        color="white"
        onClick={handleAdd}
      />
    }
    else return <FontAwesomeIcon
      icon={faMinusCircle}
      color="red"
      onClick={handleRemove}
    />
  }


    return (
      <>
      {getIcon()}

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