import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { Container } from '@mui/joy'
import CollectionList from '@/Components/Dashboard/CollectionList'
import TimeTracks from '@/Components/Dashboard/TimeTracks'

export default function Dashboard({ auth }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <Container>
                <CollectionList />
                <TimeTracks />
            </Container>
        </AuthenticatedLayout>
    );
}
