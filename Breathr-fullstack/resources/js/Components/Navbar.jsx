import { Stack, Typography, Grid, Container, Divider } from '@mui/joy'
import AppBar from '@mui/material/AppBar'
import DailyMinutes from '@/Components/DailyMinutes'

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
            </Grid>
          </Container>
        </AppBar>
    );
}
