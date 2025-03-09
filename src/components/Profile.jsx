import React from 'react';
import { Typography, Box, Avatar, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user")) || {
        name: 'Kattunga Lavanya',
        email: 'kattungalavanya@gmail.com',
        img: 'https://images.unsplash.com/photo-1601937786313-4b0b7b0d0d0b',
    };
    return (
        <Box sx={{
            maxWidth: 600, margin: 'auto', mt: 4,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex', flexDirection: 'column', gap: 2, p: 2
        }}>
            <Card sx={{ boxShadow: 5, borderRadius: 4 }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Avatar
                        src={user.img}
                        alt={user.name}
                        sx={{ width: { xs: 80, sm: 100 }, height: { xs: 80, sm: 100 }, margin: 'auto', mb: 2 }}
                    />
                    <Typography
                        variant="h4"
                        sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 'bold' }}
                    >
                        {user.name}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ mt: 1, color: 'gray' }}
                    >
                        Email: {user.email}
                    </Typography>
                    <Button variant="contained" sx={{ mt: 3, backgroundColor: '#D32F2F', ':hover': { backgroundColor: '#1565c0' } }}>
                        Edit Profile
                    </Button>
                </CardContent>
            </Card>
            <Button
                onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    navigate('/login');
                }}
                variant="contained" sx={{ mt: 3, backgroundColor: '#D32F2F', ':hover': { backgroundColor: '#d32f2f' } }}>
                Logout
            </Button>
        </Box>
    );
};

export default Profile;
