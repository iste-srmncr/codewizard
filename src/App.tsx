// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Rename your existing App component to HomePage
import{ AnnouncementsPage }from './AnnouncementPage'; // Import the AnnouncementPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/update" element={<AnnouncementsPage />} />
      </Routes>
    </Router>
  );
};

export default App;