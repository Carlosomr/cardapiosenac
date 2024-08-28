import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from '../pages/Cardapio';
import Produtos from '../pages/Produtos';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/administrador" element={<Produtos />} />
      </Routes>
    </Router>
  );
}


 