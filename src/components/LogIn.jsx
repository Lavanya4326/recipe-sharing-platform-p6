import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with:', email, password);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 2 }}>
            <Card sx={{ maxWidth: 400, width: '100%', boxShadow: 5, borderRadius: 4 }}>
                <CardContent>
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}>
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button type="submit" variant="contained" sx={{
                            backgroundColor: '#D32F2F',
                            mt: 3,
                            width: '100%',
                        }} fullWidth >
                            Log In
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default LogIn;
