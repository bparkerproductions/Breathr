import { useEffect } from 'react'
import { setSnackbarOpen, setSnackbarMessage } from '@/actions'
import { connect } from 'react-redux'

import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/Form/InputError'
import InputLabel from '@/Components/Form/InputLabel'
import TextInput from '@/Components/Form/TextInput'
import { Head, Link, useForm } from '@inertiajs/react'
import { Button } from '@mui/joy'
import { getTimeForDay } from '@/helpers/store'

const Register = function(props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    minutes: getMinutes(),
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()
    post(route('register'), {
      onSuccess: data => {
        
        // Welcome user
        props.setSnackbarOpen(true)
        props.setSnackbarMessage(`Welcome to Breathr, ${data.props.user.name}!`)

        // Reset visit count from local storage
        localStorage.removeItem('visitAmounts')
      }
    })
  }

  /**
   * If any minutes were logged locally, we want them to be added to a new user for today's date. 
   * Send the information along with the form data
   */
  function getMinutes() {
    const minutes = Math.floor(getTimeForDay() / 60)
    return minutes || null
  }

  return (
    <GuestLayout>
      <Head title="Register" />

      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="name" value="Name" />

          <TextInput
            id="name"
            name="name"
            value={data.name}
            className="mt-1 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => setData('name', e.target.value)}
            required
          />

          <InputError message={errors.name} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            onChange={(e) => setData('email', e.target.value)}
            required
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) => setData('password', e.target.value)}
            required
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

          <TextInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) => setData('password_confirmation', e.target.value)}
            required
          />

          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>

        <div className="flex items-center justify-end mt-4">
          <Link
            href={route('login')}
            className="underline text-sm text-zinc-900 rounded-md"
          >
            Already registered?
          </Link>

          <Button sx={{marginLeft: 2}} type="" disabled={processing}>
            Register
          </Button>
        </div>
      </form>
    </GuestLayout>
  )
}

const mapStateToProps = state => {
  return {}
  }
  
  export default connect(mapStateToProps, {
  setSnackbarMessage,
  setSnackbarOpen
  })(Register)