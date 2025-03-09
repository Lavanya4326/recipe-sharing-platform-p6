import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import Profile from './components/Profile';
import RecipeDetails from './components/RecipeDetails';
import Register from './components/Register';
import LogIn from './components/LogIn';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container sx={{ marginTop: '2rem' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;