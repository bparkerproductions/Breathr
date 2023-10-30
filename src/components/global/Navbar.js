import React, {useState} from 'react'
import AppToggles from './../app/Controls/AppToggles'
import VideoControls from './../app/Controls/VideoControls'
import DailyMinutes from './../app/Timer/DailyMinutes'
import ToggleAll from './../app/Controls/ToggleAll'
import NowPlaying from './../app/Video/NowPlaying'

import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import AppBar from '@mui/material/AppBar'
import Grid from '@mui/joy/Grid'
import Toolbar from '@mui/material/Toolbar'

const Navbar = props => {
  const [contentToggled, setContent] = useState(false)

  function getToggledState() {
    return contentToggled ? 'fas fa-times-circle' : 'fas fa-bars'
  }

  return (
    <AppBar>
      <Grid container>
        <Grid xs={6}>
          <Typography>
            <DailyMinutes></DailyMinutes>
          </Typography>
        </Grid>

        {/* <div onClick={() => setContent(!contentToggled)} className="mobile-toggle my-3 mt-lg-0 ps-3 ps-lg-0">
          <i className={getToggledState()}></i>
        </div> */}

        <Grid xs={6}>
          <Stack direction="row" spacing={5} alignItems="center">
            <NowPlaying />
            <VideoControls />
            <AppToggles />
            <ToggleAll />
          </Stack>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Navbar