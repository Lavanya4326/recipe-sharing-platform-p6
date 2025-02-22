import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Card, CardContent } from '@mui/material';

const AddRecipe = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Recipe Added:', { title, description, imageFile });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                padding: 2,
            }}
        >
            <Card sx={{ width: '100%', maxWidth: 600, boxShadow: 5, borderRadius: 3 }}>
                <CardContent sx={{ padding: 4 }}>
                    <Typography variant="h4" gutterBottom align="center">
                        Add a New Recipe
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Recipe Title"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            component="label"
                            sx={{
                                mt: 2,
                                backgroundColor: '#D32F2F',
                                ':hover': { backgroundColor: '#1565c0' },
                            }}
                        >
                            Upload Image
                            <input type="file" hidden accept="image/*" onChange={handleImageChange} />
                        </Button>
                        {imagePreview && (
                            <Box mt={3} sx={{ textAlign: 'center' }}>
                                <Typography variant="subtitle1">Image Preview:</Typography>
                                <Box
                                    component="img"
                                    src={imagePreview}
                                    alt="Preview"
                                    sx={{
                                        width: '100%',
                                        maxHeight: 300,
                                        objectFit: 'cover',
                                        borderRadius: 2,
                                        mt: 1,
                                    }}
                                />
                            </Box>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 3, py: 1.5, fontWeight: 'bold', backgroundColor: '#D32F2F' }}
                        >
                            Add Recipe
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AddRecipe;
