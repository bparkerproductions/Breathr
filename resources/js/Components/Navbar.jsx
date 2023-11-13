import { Stack, Typography, Grid, Container, Box } from '@mui/joy'
import DailyMinutes from '@/Components/DailyMinutes'
import VideoControls from '@/Components/VideoControls'
import AppToggles from '@/Components/AppToggles'
import NowPlaying from '@/Components/NowPlaying'
import AuthButtons from '@/Components/AuthButtons'
import { useRef } from 'react'

export default function Navbar(props) {
  const navbarRef = useRef(null)
  /**
   * Calculate the navbar height then add an amount to space elements under the navbar
   */
  function getSpacerHeight() {
    if (navbarRef.current) {
      const height = navbarRef.current.offsetHeight
      const extraSpacing = 75
      return height + extraSpacing + 'px'
    }
  }

  return (
    <>
      <Box
        ref={navbarRef}
        component="nav"
        className="bg-blue-500 flex"
        sx={{
          position: 'fixed',
          width: '100%',
          zIndex: 5,
          top: 0
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

      <Box className="spacer" sx={{ height: getSpacerHeight() }}>
      </Box>
    </>
  );
}
