import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const [newUser, setNewUser] = useState({});
    const handleSubmit = e => {
        e.preventDefault();

        console.log(newUser)
    }
    const handleBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newValue = { ...newUser };
        newValue[field] = value;
        setNewUser(newValue);

    }

    return (
        <div>
            <Navigation></Navigation>
            <Box
                onSubmit={handleSubmit}
                component="form"
                sx={{
                    width: '45ch',
                    mx: 'auto',
                    border: 1,
                    borderRadius: 1,
                    p: 5,
                    my: 5
                }}
                spacing={2}

                autoComplete="off"
            >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 2, fontWeight: 600 }}>
                    Create an Account
                </Typography>

                <TextField onBlur={handleBlur} required
                    id="outlined-required" label="Full Name" variant="standard" sx={{ width: 1, mb: 2 }} type='text' name="name" defaultValue='' />

                <TextField onBlur={handleBlur} id="standard-basic" label="Email" variant="standard" sx={{ width: 1, mb: 2 }} type='email' name="email" defaultValue='' required />

                <TextField onBlur={handleBlur} id="standard-basic" label="Password" variant="standard" sx={{ width: 1, mb: 2 }} type='password' name='password' defaultValue='' required />

                <TextField onBlur={handleBlur} id="standard-basic" label="Confirm Password" variant="standard" sx={{ width: 1, mb: 2 }} type='password' name='password2' defaultValue='' required />

                <Button color="primary" variant="contained" sx={{ width: 1, mb: 2, backgroundColor: 'hotpink' }} type='submit' >Register</Button>

                <Typography variant="p" component="div" sx={{ flexGrow: 1, mb: 2, fontWeight: 600 }}>
                    Already Have an account? <Link to='/login' style={{ color: 'hotpink' }}>Login</Link>
                </Typography>
            </Box>
        </div>
    );
};

export default Register;