import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { setSnackbarOpen } from '@/actions'
import { connect } from 'react-redux'

import { Container, Snackbar } from '@mui/joy'
import CollectionList from '@/Components/Dashboard/CollectionList'
import TimeTracks from '@/Components/Dashboard/TimeTracks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Dashboard = props => {
  return (
    <AuthenticatedLayout
      user={props.auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      <Container>
        <CollectionList />
        <TimeTracks />
      </Container>

      <Snackbar
        autoHideDuration={3200}
        open={props.snackbarOpen}
        variant="soft"
        color="success"
        size="lg"
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        startDecorator={<FontAwesomeIcon icon={faCheckCircle} />}
        onClose={() => {props.setSnackbarOpen(false)}}
        sx={{ marginBottom: 2, marginLeft: 2 }}
      >
      {props.message}
      </Snackbar>
    </AuthenticatedLayout>
  );
}

const mapStateToProps = state => {
  return {
    snackbarOpen: state.snackbarOpen,
    message: state.snackbarMessage
  }
}

export default connect(mapStateToProps, {
  setSnackbarOpen
})(Dashboard)
