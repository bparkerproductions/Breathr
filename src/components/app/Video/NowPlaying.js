import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import ToolTip from '../../elements/ToolTip'

import IconButton from '@mui/joy/IconButton'
import Button from '@mui/joy/Button'
import Box from '@mui/joy/Box'
import Tooltip from '@mui/joy/Tooltip'
import Card from '@mui/joy/Card'
import Divider from '@mui/joy/Divider'
import Typography from '@mui/joy/Typography'
import Link from '@mui/joy/Link'
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
        <IconButton onClick={tooltipActivated}>
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