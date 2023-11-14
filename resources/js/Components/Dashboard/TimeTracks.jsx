import { router, usePage } from '@inertiajs/react'
import { setSnackbarOpen, setSnackbarMessage } from '@/actions'

import { Card, Typography, CardContent, Divider, Button, CardActions } from '@mui/joy'
import TimeTrackTable from '@/Components/Dashboard/TimeTrackTable'
import TimeStats from '@/Components/Dashboard/TimeStats'
import { connect } from 'react-redux'

const TimeTracks = props => {
  const { user } = usePage().props

  /**
   * Make a db call to delete all time tracks from a user
   */
  function deleteAll() {
    router.delete('/time/destroy', {
      onSuccess: () => {
        props.setSnackbarMessage("Your time tracks have successfully been deleted")
        props.setSnackbarOpen(true)
      }
    })
  }

  return (
    <Card variant="soft" color="neutral" sx={{ marginY: 5 }}>
      <Typography level="h3">Your Time Report</Typography>
      <Divider />
      <CardContent>
        <TimeStats />
        <TimeTrackTable />
      </CardContent>
      <CardActions>
        <Button
          onClick={deleteAll}
          color="danger"
          sx={{ maxWidth: '150px' }}
          disabled={user['time_tracks'].length ? false : true}
        >Delete All Data</Button>
      </CardActions>
    </Card>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {
  setSnackbarOpen,
  setSnackbarMessage
})(TimeTracks)