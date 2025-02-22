import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const Recipes = [
    {
        id: 1,
        title: 'Lasagna',
        description: 'A classic Italian dish featuring layers of pasta, rich meat sauce, creamy béchamel, and melted cheese.',
        image: 'https://www.gimmesomeoven.com/wp-content/uploads/2020/10/Beef-Stroganoff-Recipe-9.jpg',
    },
    {
        id: 2,
        title: 'Beef Stroganoff',
        description: 'A Russian dish consisting of sautéed beef in a creamy mushroom and onion sauce, typically served over noodles or rice.',
        image: 'https://www.gimmesomeoven.com/wp-content/uploads/2020/10/Beef-Stroganoff-Recipe-9.jpg',
    },
    {
        id: 3,
        title: 'Apple Pie',
        description: 'A classic dessert made with a flaky pastry crust filled with spiced apple slices, baked to golden perfection.',
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2019/11/Homemade-Apple-Pie-From-Scratch-1200.jpg',
    },
    {
        id: 4,
        title: 'Sushi',
        description: 'A traditional Japanese dish featuring vinegared rice combined with various ingredients such as raw fish, vegetables, and seaweed.',
        image: 'https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg',
    },
    {
        id: 5,
        title: 'Tacos',
        description: 'A traditional Mexican dish consisting of small hand-sized corn or wheat tortillas topped with a variety of fillings such as beef, pork, chicken, or vegetables.',
        image: 'https://blog.amigofoods.com/wp-content/uploads/2020/12/tacos-authentic-mexican-food.jpg',
    }
];


const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = Recipes.find((r) => r.id === parseInt(id));

    if (!recipe) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Typography variant="h4" color="error">
                    Recipe not found
                </Typography>
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
