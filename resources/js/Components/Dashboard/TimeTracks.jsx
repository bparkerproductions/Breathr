import { Link, router, usePage } from '@inertiajs/react'
import { useState, useEffect } from 'react'

import { Card, Typography, CardContent, Divider, Snackbar, Button, CardActions } from '@mui/joy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import TimeTrackTable from '@/Components/Dashboard/TimeTrackTable'
import TimeStats from '@/Components/Dashboard/TimeStats'

export default function CollectionList(props) {
  const { user } = usePage().props
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")

  /**
   * Make a db call to delete all time tracks from a user
   */
  function deleteAll() {
    router.delete('/time/destroy', {
      onSuccess: () => {
        setMessage("Your time tracks have successfully been deleted")
        setOpen(true)
      }
    })
  }

  return (
    <>
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

      <Snackbar
        autoHideDuration={3200}
        open={open}
        variant="soft"
        color="success"
        size="lg"
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        startDecorator={<FontAwesomeIcon icon={faCheckCircle} />}
        onClose={() => {setOpen(false)}}
        sx={{ marginBottom: 2, marginLeft: 2 }}
      >
      {message}
      </Snackbar>
    </>
  )
}