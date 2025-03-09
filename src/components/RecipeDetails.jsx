import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`https://recipe-sharing-platform-p6-backend.vercel.app/api/recipes/${id}`);
                if (!response.ok) {
                    throw new Error('Recipe not found');
                }
                const data = await response.json();
                setRecipe(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Typography variant="h4" color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: { xs: 2, md: 5 },
            }}
        >
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    boxShadow: 10,
                    borderRadius: 6,
                    overflow: 'hidden',
                    maxWidth: { xs: '100%', lg: '90%' },
                    width: '100%',
                    backgroundColor: '#fff',
                }}
            >
                <CardMedia
                    component="img"
                    image={recipe.image}
                    alt={recipe.title}
                    sx={{
                        width: { xs: '100%', lg: '55%' },
                        height: { xs: 300, md: 450, lg: 'auto' },
                        objectFit: 'cover',
                    }}
                />
                <CardContent
                    sx={{
                        padding: { xs: 3, md: 5 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor: '#fafafa',
                    }}
                >
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            color: '#333',
                            fontSize: { xs: '2rem', md: '2.2rem', lg: '2.5rem' },
                        }}
                    >
                        {recipe.title}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.1rem', lg: '1.2rem' },
                            lineHeight: 1.8,
                            color: '#555',
                            marginTop: 2,
                        }}
                    >
                        {recipe.description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default RecipeDetails;
