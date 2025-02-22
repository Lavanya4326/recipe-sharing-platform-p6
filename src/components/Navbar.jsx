import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
            <List>
                {['Home', 'Add Recipe', 'Profile'].map((text, index) => (
                    <ListItem
                        sx={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}
                        button key={text} component={Link} to={`/${text.toLowerCase().replace(' ', '-')}`}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                <ListItem sx={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }} button 
                    component={Link} to="/login">
                    <ListItemText primary="LogOut" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#D32F2F' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Recipe Sharing Platform
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button color="inherit" component={Link} to="/home">Home</Button>
                        <Button color="inherit" component={Link} to="/add-recipe">Add Recipe</Button>
                        <Button color="inherit" component={Link} to="/profile">Profile</Button>
                        <Button color="inherit" component={Link} to="/login">LogOut</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
