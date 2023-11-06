import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Card, Typography, Container } from '@mui/joy';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <Container>
                <Card sx={{ marginTop: 5 }}>
                    <Typography level="h2">Your Time</Typography>
                </Card>
                <Card sx={{ marginTop: 5 }}>
                    <Typography level="h2">Your Collection</Typography>
                </Card>
            </Container>
        </AuthenticatedLayout>
    );
}
