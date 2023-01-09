import React from 'react';

import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

export const Navbar = () => {

    return (

        <AppBar position="absolute" sx={{ backgroundColor: '#fff' }}>

            <Container maxWidth="xl">

                <Toolbar disableGutters>

                    <Typography variant="h5" noWrap sx={{ flexGrow: 1 }}>
                        
                        <Box display='flex' flexDirection='column' alignItems='left' style={{ paddingTop:10, paddingBottom:10, }} >
                                
                            <Link to="/">
                                <img style={{ width: 300 }} src={ '/src/assets/logo_pjecz.png'} alt='logo-pagos-pjecz'
                                />
                            </Link>
                        
                        </Box>

                    </Typography>

                </Toolbar>

            </Container>

        </AppBar>
        
    )

}
