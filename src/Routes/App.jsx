import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from '../pages/Cardapio';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cardapio" element={<Cardapio />} />
        
      </Routes>
    </Router>
  );
}


 