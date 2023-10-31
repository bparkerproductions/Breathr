import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import ToolTip from '../../elements/ToolTip'

import { IconButton, Button, Box, Tooltip, Card, Divider, Typography } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { getByDisplayValue } from '@testing-library/react'

const NowPlaying = props => {
  const [tooltipToggled, toggleTooltip] = useState(false)

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
  }

  function getHidden() {
    if (!tooltipToggled) return 'none'
  }

  return (
    <Box id="now-playing" sx={{ position: "relative" }}>
      <Tooltip title="Toggle video information" variant="solid">
        <IconButton onClick={tooltipActivated} variant="plain">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="ui-button"
            size="lg"
          />
        </IconButton>
      </Tooltip>

      <Card
        orientation="vertical"
        variant="soft"
        id="now-playing-info"
        sx={{
          width: 350,
          position: "absolute",
          display: getHidden(),
          marginTop: 1
        }}
      >

        <Button
          target="_blank"
          component="a"
          color="danger"
          href={getPlayerInfo('videoUrl')}
          startDecorator={<FontAwesomeIcon
            icon={faYoutube}
            className="ui-button"
            size="lg"
          />}
        >
          Open in youtube
        </Button>
        <Divider />
        <Box>
          <Typography level="body-md" fontWeight="bold" marginBottom="0">Now Playing</Typography>
          <Typography level="body-md" fontWeight="light">{getVideoData('title')}</Typography>
        </Box>
        <Divider />

        <Box>
          <Typography fontWeight="bold">Duration</Typography>
          <Typography fontWeight="light">{Math.ceil(getPlayerInfo('duration')/60)} minutes</Typography>
        </Box>
      </Card>
    </Box>
  )
}

const mapStateToProps = state => {
  return {
    videoPlayer: state.videoPlayer,
  }
}

export default connect(mapStateToProps, {
  
})(NowPlaying)