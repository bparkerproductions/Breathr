import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { IconButton, Button, Box, Tooltip, Card, Divider, Typography, Modal, CardContent } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const NowPlaying = props => {
  const [tooltipToggled, toggleTooltip] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside])

  function handleClickOutside() {
    setShow(false)
    setModalOpen(false)
  }

  function getPlayerInfo(item) {
    if (props.videoPlayer && props.videoPlayer.playerInfo) {
      return props.videoPlayer.playerInfo[item]
    }
  }

  function getVideoData(item) {
    if (props.videoPlayer && props.videoPlayer.playerInfo) {
      return props.videoPlayer.playerInfo.videoData[item]
    }
  }

  function tooltipActivated(e) {
    e.stopPropagation()
    toggleTooltip(!tooltipToggled)

    if (window.innerWidth > 900) setShow(!show)
    else setModalOpen(true) // Open modal instead
  }

  function cardContent() {
    return <CardContent>
      <Button
        target="_blank"
        component="a"
        color="danger"
        href={getPlayerInfo('videoUrl')}
        sx={{ marginBottom: 1 }}
        startDecorator={<FontAwesomeIcon
          icon={faYoutube}
          className="cursor-pointer"
          size="lg"
        />}
      >
        Open in youtube
      </Button>
      <Box>
        <Typography level="body-md" fontWeight="bold" marginBottom="0">Now Playing</Typography>
        {getPlayingFromText()}
        <Typography level="body-md" fontWeight="light">{getVideoData('title')}</Typography>
      </Box>
      <Divider sx={{ marginY: 1 }} />

      <Box>
        <Typography fontWeight="bold">Duration</Typography>
        <Typography fontWeight="light">{Math.ceil(getPlayerInfo('duration')/60)} minutes</Typography>
      </Box>
    </CardContent>
  }

  function getPlayingFromText() {
    if (!Object.keys(props.videoContext).length) return
    let playingFrom

    if (props.videoContext.isDefault) playingFrom = 'Default Video'
    else if (props.videoContext.isFromCollection) playingFrom = 'Collection'
    else playingFrom = 'Search'

    return <p className="text-sm text-gray-500">
      Playing from: {playingFrom}
      </p>
  }

  return (
    <Box id="now-playing" sx={{ position: "relative" }}>
      <Tooltip title="Toggle video information" variant="solid">
        <IconButton onClick={tooltipActivated} variant="plain">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="cursor-pointer text-blue-200"
            size="lg"
          />
        </IconButton>
      </Tooltip>

      {show && <Card
        orientation="vertical"
        variant="soft"
        id="now-playing-info"
        sx={{
          width: 350,
          position: "absolute",
          marginTop: 1
        }}
      >

        {cardContent()}
      </Card>}

      {modalOpen && <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{ marginTop: 5, marginX: 2 }}
      >
          <Card
            variant="soft"
            sx={{
              width: '100%',
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
            }}>
            {cardContent()}
          </Card>
      </Modal>}
    </Box>
  )
}

const mapStateToProps = state => {
  return {
    videoPlayer: state.videoPlayer,
    videoContext: state.videoContext
  }
}

export default connect(mapStateToProps, {
  
})(NowPlaying)