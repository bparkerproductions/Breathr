import React from 'react'
import { connect } from 'react-redux'

import VideoItem from '@/Components/VideoItem'
import { Typography, Alert, Grid } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarning } from '@fortawesome/free-solid-svg-icons'

const VideoResult = props => {
  function renderResults(loopObj, isCollection=false) {
    if (loopObj.length) {
      return <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {loopObj.map( (video, index) => {
            return <Grid xs={12} md={6} xl={4} key={video.id.db_id || video.etag}>
                    <VideoItem video={video} isCollection={isCollection}></VideoItem>
                  </Grid>
          })}
        </Grid>
    }
    else {
      const noSearch = 'Nothing came up for your search. Maybe try again with a different term.'
      const noCollection = 'You have nothing in your collection. Head over to the search bar and find some!'

      return (
        <Alert
          variant="soft"
          color="warning"
          startDecorator={<FontAwesomeIcon icon={faWarning}/>}
        >{isCollection ? noCollection : noSearch}</Alert>
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
        <Alert variant="soft" color="primary">
          <Typography>Begin your search above</Typography>
        </Alert>
      )
    }
  }

  return renderVideo()
}

const mapStateToProps = (state) => {
  return { collectionVideos: state.videos }
}

export default connect(mapStateToProps)(VideoResult)