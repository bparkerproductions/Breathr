import React, {useState} from 'react'
import AppToggles from './../app/Controls/AppToggles'
import VideoControls from './../app/Controls/VideoControls'
import DailyMinutes from './../app/Timer/DailyMinutes'
import ToggleAll from './../app/Controls/ToggleAll'
import NowPlaying from './../app/Video/NowPlaying'

import { Stack, Typography, Box, Button, Grid, Container } from '@mui/joy'
import AppBar from '@mui/material/AppBar'

const Navbar = props => {
  const [contentToggled, setContent] = useState(false)

  function getToggledState() {
    return contentToggled ? 'fas fa-times-circle' : 'fas fa-bars'
  }

  return (
    <AppBar>
      <Container>
      <Grid container rowSpacing={3}>
        <Grid xs={6}>
          <Typography>
            <DailyMinutes></DailyMinutes>
          </Typography>
        </Grid>

        <Grid xs={6} justifyContent="flex-end" alignItems="center">
          <Stack
            direction="row"
            spacing={5}
            justifyContent="end"
            alignItems="center"
            sx={{height: '100%'}}
          >
            <NowPlaying />
            <VideoControls />
            <AppToggles />
            <ToggleAll />
          </Stack>
        </Grid>
      </Grid>
      </Container>
    </AppBar>
  )
}

export default Navbar