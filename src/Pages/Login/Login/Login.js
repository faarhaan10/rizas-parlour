import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Box
                component="form"
                sx={{
                    width: '45ch',
                    mx: 'auto',
                    p: 5,
                    my: 15,
                    textAlign: 'center'
                }}
                spacing={2}
                noValidate
                autoComplete="off"
            >

                <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 2, fontWeight: 600 }}>
                    <img src='https://i.ibb.co/zJFDQp5/logo.png' alt='' style={{ width: '150px' }} />
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 2, fontWeight: 600 }}>
                    Login With
                </Typography>

                <Button variant="outlined" sx={{ borderRadius: 5, width: 1 }} style={{ position: 'relative' }}> <img src="https://i.ibb.co/ZzHTC84/Group-573.png" alt="" style={{ width: '25px', left: 5, position: 'absolute' }} /> Continue with google</Button>

                <Typography variant="p" component="div" sx={{ flexGrow: 1, mb: 2, fontWeight: 600 }}>
                    Don't Have an account? <Link to='/register' style={{ color: 'hotpink' }}>Create an account</Link>
                </Typography>
            </Box>
        </div>
    );
};

export default Login;