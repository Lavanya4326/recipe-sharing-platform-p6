import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate();
    return (
        <Card onClick={() => navigate(`/recipe/${recipe._id}`)} sx={{ cursor: 'pointer' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={recipe.image}
                    alt={recipe.title}
                />
                <CardContent>
                    <Typography variant="h6">{recipe.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {recipe.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default RecipeCard;
