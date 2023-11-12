import { Stack, Typography, Grid, Container, Divider, Sheet, Box, ButtonGroup, Button } from '@mui/joy'
import DailyMinutes from '@/Components/DailyMinutes'
import VideoControls from '@/Components/VideoControls'
import AppToggles from '@/Components/AppToggles'
import NowPlaying from '@/Components/NowPlaying'
import AuthButtons from '@/Components/AuthButtons'

export default function Navbar({ ...props }) {
    return (
        <Box
          component="nav"
          className="bg-blue-500 flex"
          sx={{
            position: 'fixed',
            width: '100%',
            zIndex: 5
          }}
        >
          <Container>
            <Grid container spacing={2}>
              <Grid xs={12} lg={8} sx={{ overflowX: { xs:'auto', md: 'inherit' }}}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={5}
                  sx={{ height: '100%', paddingY: 1 }}
                >
                  <Typography>
                    <DailyMinutes></DailyMinutes>
                  </Typography>
                  <VideoControls />
                  <AppToggles />
                  <NowPlaying />
                </Stack>
              </Grid>

              <Grid xs={12} lg={4}>
                <AuthButtons></AuthButtons>
              </Grid>
            </Grid>
          </Container>
        </Box>
    );
}
