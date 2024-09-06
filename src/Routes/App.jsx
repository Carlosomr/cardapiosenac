// Routes/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cardapio from '../pages/Cardapio';
import Login from '../pages/Login';
import Produtos from '../pages/Produtos';
import Registro from '../pages/Registro';

function App() {
  return (
    <Routes>
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/administrador" element={<Produtos />} />
      <Route path="/" element={<Registro />} />
    </Routes>
  );
}

export default App;