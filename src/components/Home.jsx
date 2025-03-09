import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import RecipeCard from '../components/RecipeCard';
import axios from 'axios';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('https://recipe-sharing-platform-p6-backend.vercel.app/api/recipes');
                console.log(response.data);
                setRecipes(response.data);
            } catch (err) {
                setError('Failed to fetch recipes. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <Box sx={{ padding: { xs: 2, sm: 4 }, minHeight: '100vh' }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: 4,
                    color: '#333',
                }}
            >
                Trending Recipes
            </Typography>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Alert severity="error">{error}</Alert>
            ) : (
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: '1fr 1fr 1fr',
                        },
                        gap: 2,
                        justifyContent: 'center',
                    }}
                >
                    {recipes.map((recipe) => (
                        <Box key={recipe._id} sx={{ maxWidth: 350, margin: '0 auto' }}>
                            <RecipeCard recipe={recipe} />
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default Home;
