import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import Profile from './components/Profile';
import RecipeDetails from './components/RecipeDetails';
import LogIn from './components/LogIn';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container sx={{ marginTop: '2rem' }}>
        <Routes>
          <Route path="/login" element={<LogIn />} />
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