import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from '../pages/Cardapio';
import Login from '../pages/Login';
import Produtos from '../pages/Produtos';
import Registro from '../pages/Registro';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/" element={<Login />} />
        <Route path="/administrador" element={<Produtos />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}


 