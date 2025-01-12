// Routes/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cardapio from '../pages/Cardapio';
import Login from '../pages/Login';
import Produtos from '../pages/Produtos';
import Registro from '../pages/Registro';
import ConsultarUsuarios  from '../pages/ConsultarUsuarios';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/administrador" element={<Produtos />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/administrador/nomes" element={<ConsultarUsuarios />} />
    </Routes>
  );
}

export default App;