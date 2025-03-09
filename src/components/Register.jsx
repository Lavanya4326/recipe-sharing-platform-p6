import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('https://recipe-sharing-platform-p6-backend.vercel.app/api/users/register', {
                name,
                email,
                password
            });

            if (response.data) {
                navigate('/login');
            } else {
                setError('Registration failed. Try again.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Server error. Try again.');
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 2 }}>
            <Card sx={{ maxWidth: 400, width: '100%', boxShadow: 5, borderRadius: 4 }}>
                <CardContent>
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}>
                        Register
                    </Typography>
                    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                    <form onSubmit={handleRegister}>
                        <TextField
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
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
                        }} fullWidth>
                            Register
                        </Button>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                            <Button variant="text" onClick={() => navigate('/login')}>
                                Already have an account? Log In
                            </Button>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Register;
