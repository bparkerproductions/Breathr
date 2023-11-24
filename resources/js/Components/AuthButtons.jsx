import { Link, usePage } from '@inertiajs/react'
import { Stack, ButtonGroup, Button } from '@mui/joy'
import { connect } from 'react-redux'
import { setSnackbarOpen, setSnackbarMessage } from '@/actions'

const AuthButtons = props => {
  const { auth } = usePage().props

  function loggedOut() {
    props.setSnackbarOpen(true)
    props.setSnackbarMessage('You have successfully been logged out.')
  }

  return <Stack
          direction="row"
          spacing={2.5}
          alignItems="center"
          justifyContent="flex-end"
          sx={{ height: '100%', paddingBottom: {xs: 2, lg: 0} }}
        >

          {!auth.user ? (
            <ButtonGroup
              variant="soft"
              aria-label="Log in or sign up"
            >
              <Link href={route('login')}>
                <Button>Log In</Button>
              </Link>
              <Link href={route('register')}>
                <Button color="primary">Register</Button>
              </Link>
            </ButtonGroup>) : (

            <ButtonGroup variant="soft">
              <Link href={route('logout')} method="post" onClick={loggedOut}>
                <Button color="warning">Log Out</Button>
              </Link>

              <Link href={route('dashboard')}>
                <Button color="primary">Dashboard</Button>
              </Link>
            </ButtonGroup>
          )
          }
        </Stack>
}

export default connect(null, {
  setSnackbarMessage,
  setSnackbarOpen
})(AuthButtons)
