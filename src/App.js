import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from "./pages/ExerciseDetail"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bmi from "./pages/Bmi";

import './App.css';

const App = () => {
  return (
    <Box width = "400px" sx={{width: {xl: '1488p'}}} m="auto">
    <Navbar />
    <div className="body">
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path = "/exercise/:id" element={<ExerciseDetail />} />
      <Route path = "/bmi" element={<Bmi />} />
    </Routes>
    </div>
    <Footer />
    </Box>
  )
}

export default App