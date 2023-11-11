import { usePage } from '@inertiajs/react'
import { checkVisitCount } from '@/helpers/store'
import { Grid, Sheet, Typography } from '@mui/joy'

export default function TimeStats(props) {
  const { user } = usePage().props
  
  /**
   * Grab user timestats from the database and get the sum of the total time
   */
  function totalMinutes() {
    let totalTime = 0

    user['time_tracks'].forEach(item => {
      totalTime += item.tracked_minutes
    })

    return totalTime + "m"
  }

  /**
   * Grab user timestats from the database and sum the total time from the most recent 7 days
   */
  function totalMinutesOfLastWeek() {
    let totalTime = 0
    const today = new Date()
    const dateSevenDaysAgo = new Date()
    dateSevenDaysAgo.setDate(today.getDate() - 7) 

    user['time_tracks'].forEach(item => {
      const checkedDate = new Date(item.day)
      if (checkedDate > dateSevenDaysAgo) totalTime += item.tracked_minutes
    })

    return totalTime + "m"
  }

  return (
    <Sheet variant="outlined" sx={{ p: 2 }}>
      <Grid container>
        <Grid xs={12} md={6} lg={4} sx={{ marginBottom: { xs: 2, lg: 0 }} }>
          <Typography level="body-md">Total Minutes:</Typography>
          <Typography level="h1">{totalMinutes()}</Typography>
        </Grid>
        <Grid xs={12} md={6} lg={4} sx={{ marginBottom: { xs: 2, lg: 0 }} }>
          <Typography level="body-md">Total Minutes (last 7 days):</Typography>
          <Typography level="h1">{totalMinutesOfLastWeek()}</Typography>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Typography level="body-md">Total Visits:</Typography>
          <Typography level="h1">{checkVisitCount()}</Typography>
        </Grid>
      </Grid>
    </Sheet>
  )
}