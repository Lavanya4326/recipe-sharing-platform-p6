import React from 'react';
import { Box, Typography } from '@mui/material';
import RecipeCard from '../components/RecipeCard';

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

const Home = () => {
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
                {Recipes.map((recipe) => (
                    <Box key={recipe.id} sx={{ maxWidth: 350, margin: '0 auto' }}>
                        <RecipeCard recipe={recipe} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Home;
