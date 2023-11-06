import { Stack, Typography, Grid, Container, Divider } from '@mui/joy'
import AppBar from '@mui/material/AppBar'
import DailyMinutes from '@/Components/DailyMinutes'
import VideoControls from '@/Components/VideoControls'
import AppToggles from '@/Components/AppToggles'
import NowPlaying from '@/Components/NowPlaying'

export default function Navbar({ ...props }) {
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
                  spacing={2.5}
                  justifyContent="end"
                  alignItems="center"
                  sx={{height: '100%'}}
                >
                  <Divider orientation="vertical" />
                  <VideoControls />
                  <Divider orientation="vertical" />
                  <AppToggles />
                  <NowPlaying />
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
    );
}
