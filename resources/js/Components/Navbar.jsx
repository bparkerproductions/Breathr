import { Stack, Typography, Grid, Container, Divider, ButtonGroup, Button } from '@mui/joy'
import AppBar from '@mui/material/AppBar'
import DailyMinutes from '@/Components/DailyMinutes'
import VideoControls from '@/Components/VideoControls'
import AppToggles from '@/Components/AppToggles'
import NowPlaying from '@/Components/NowPlaying'
import AuthButtons from '@/Components/AuthButtons'

export default function Navbar({ ...props }) {
    return (
        <AppBar>
          <Container>
            <Grid container spacing={2}>
              <Grid lg={8}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2.5}
                  sx={{ height: '100%' }}
                >
                  <Typography>
                    <DailyMinutes></DailyMinutes>
                  </Typography>
                  <Divider orientation="vertical" />
                  <VideoControls />
                  <Divider orientation="vertical" />
                  <AppToggles />
                  <NowPlaying />
                </Stack>
              </Grid>

              <Grid lg={4}>
                <AuthButtons></AuthButtons>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
    );
}
