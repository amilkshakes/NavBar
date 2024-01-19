import React from 'react';

import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@mui/material';

function NavBar ()
{
    return
    (
        <AppBar position = 'static'>
            <Toolbar>
               
                <Typography variant = 'h6'>
                    <Link to = '/'>Home</Link>
                </Typography>
                <Typography variant ='h6'>
                    <Link to = '/MaterialUI'>MaterialUI</Link>
                </Typography>
                <Typography varaint = 'h6'>
                    <Link to = '/Npm'>Npm</Link>
                </Typography>

            </Toolbar>
        </AppBar>
    );
};

export default NavBar;