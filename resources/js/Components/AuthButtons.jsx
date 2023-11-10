import { Link, usePage } from '@inertiajs/react'
import { Stack, ButtonGroup, Button } from '@mui/joy'

export default function AuthButtons({ ...props }) {
  const { auth } = usePage().props

    return (
      <Stack
        direction="row"
        spacing={2.5}
        alignItems="center"
        justifyContent="flex-end"
        sx={{ height: '100%' }}
      >

        {!auth.user ? (
          <ButtonGroup
            variant="soft"
            aria-label="Log in or sign up"
          >
            <Link href={route('login')}>
              <Button color="primary">Log In</Button>
            </Link>
            <Link href={route('register')}>
              <Button>Sign Up</Button>
            </Link>
          </ButtonGroup>) : (

          <ButtonGroup variant="soft">
            <Link href={route('logout')} method="post">
              <Button color="warning">Log Out</Button>
            </Link>

            <Link href={route('dashboard')}>
              <Button color="primary">Dashboard</Button>
            </Link>
          </ButtonGroup>
        )
        }
      </Stack>
    )
}
