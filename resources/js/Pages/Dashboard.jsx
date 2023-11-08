import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, usePage } from '@inertiajs/react'
import { Card, Typography, Container, CardContent, Divider, Box } from '@mui/joy'
import CollectionItem from '@/Components/Dashboard/CollectionItem'

export default function Dashboard({ auth }) {
    const { user } = usePage().props

    function collectionItems() {
        if (user['collection_items']) {
            return (
                <Box>
                    {user['collection_items'].map( elem => {
                        return (
                            <CollectionItem key={elem.video_id} item={elem} />
                        )
                    })}
                    </Box>
            );
        }
        else {
            return <Typography>You have no collection items.</Typography>
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <Container>
                <Card variant="soft" color="neutral" sx={{ marginTop: 5 }}>
                    <Typography level="h3">Your Collection</Typography>
                    <Divider />
                    <CardContent>
                        {collectionItems()}
                    </CardContent>
                </Card>
            </Container>
        </AuthenticatedLayout>
    );
}
