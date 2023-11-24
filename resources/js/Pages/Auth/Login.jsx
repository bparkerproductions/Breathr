import { useEffect } from 'react'
import { setSnackbarOpen, setSnackbarMessage } from '@/actions'

import Checkbox from '@/Components/Form/Checkbox'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/Form/InputError'
import InputLabel from '@/Components/Form/InputLabel'
import TextInput from '@/Components/Form/TextInput'
import { Head, Link, useForm } from '@inertiajs/react'
import { Button } from '@mui/joy'
import { connect } from 'react-redux'

const Login = function({ status, canResetPassword, setSnackbarOpen, setSnackbarMessage }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()

    post(route('login'), {
      onSuccess: () => {
        setSnackbarOpen(true)
        setSnackbarMessage('You have successfully been logged in.')
      }
    })
  }

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            isFocused={true}
            onChange={(e) => setData('email', e.target.value)}
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
            autoComplete="current-password"
            onChange={(e) => setData('password', e.target.value)}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={(e) => setData('remember', e.target.checked)}
            />
            <span className="ml-2 text-sm text-zinc-900">Remember me</span>
          </label>
        </div>

        <div className="flex items-center justify-end mt-4">
          {/* {canResetPassword && (
            <Link
              href={route('password.request')}
              className="underline text-sm text-zinc-900 rounded-md"
            >
              Forgot your password?
            </Link>
          )} */}

          <Button type="" sx={{ marginLeft: 2 }} disabled={processing}>
            Log in
          </Button>
        </div>
      </form>
    </GuestLayout>
  )
}

export default connect(null, {
  setSnackbarMessage,
  setSnackbarOpen
})(Login)