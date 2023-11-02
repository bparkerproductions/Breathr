import React, {useState} from 'react'
import AppToggles from './../app/Controls/AppToggles'
import VideoControls from './../app/Controls/VideoControls'
import DailyMinutes from './../app/Timer/DailyMinutes'
import ToggleAll from './../app/Controls/ToggleAll'
import NowPlaying from './../app/Video/NowPlaying'

import { Stack, Typography, Grid, Container, Divider } from '@mui/joy'
import AppBar from '@mui/material/AppBar'

const Navbar = props => {
  const [contentToggled, setContent] = useState(false)

  function getToggledState() {
    return contentToggled ? 'fas fa-times-circle' : 'fas fa-bars'
  }

  return (
    <AppBar>
      <Container>
      <Grid container spacing={2}>
        <Grid lg={3}>
          <Typography>
            <DailyMinutes></DailyMinutes>
          </Typography>
        </Grid>

        <Grid lg={9} justifyContent="flex-end" alignItems="center">
          <Stack
            direction="row"
            spacing={5}
            justifyContent="end"
            alignItems="center"
            sx={{height: '100%'}}
          >
            <NowPlaying />
            <Divider orientation="vertical" />
            <VideoControls />
            <Divider orientation="vertical" />
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