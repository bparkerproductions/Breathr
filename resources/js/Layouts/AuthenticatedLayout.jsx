import { Link } from '@inertiajs/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Grid, Dropdown, MenuButton, MenuItem, Menu, Box, Container } from '@mui/joy'

export default function Authenticated({ user, header, children }) {

    return (
        <Box className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Box
                className="bg-gray-800"
                component="nav"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingY: 1 
                }}
                >
                <Container>
                    <Grid container>
                        <Grid xs={12} lg={9} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Link href="/">
                                <FontAwesomeIcon
                                    icon={faHome}
                                    color="white"
                                    size="xl"
                                    title="Back to main app"
                                ></FontAwesomeIcon>
                            </Link>
                        </Grid>

                        <Grid xs={12} lg={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Dropdown>
                                <MenuButton color="primary">
                                    {user.name}
                                </MenuButton>
                                <Menu color="primary">
                                    <MenuItem>
                                        <Link href={route('profile.edit')}>Edit Profile</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href={route('logout')} method="post">Log Out</Link>
                                    </MenuItem>
                                </Menu>
                            </Dropdown>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


            <Box component="main">{children}</Box>
        </Box>
    );
}
