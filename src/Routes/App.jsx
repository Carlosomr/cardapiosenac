import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from '../pages/Cardapio';
import LoginPage from '../pages/Login';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}


 