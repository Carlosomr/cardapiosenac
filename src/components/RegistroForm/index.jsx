import React, { useState } from "react";
import Input from '../Input';
import Button from '../Button';
import { RegistroContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const RegistroForm = ({ onRegistro }) => {
  const [usuario, setUsuario] = useState('');
  const [nome_usuario, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cnpj, setCnpj] = useState('');

  const navigate = useNavigate();

  const handleSubmitRegistro = async (e) => {
    e.preventDefault();
    
    const formData = {
      usuario,
      nome_usuario,
      email,
      senha,
      endereco,
      cnpj
    };

    try {
      const response = await fetch('https://api-steel-tau-36.vercel.app/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      alert('Cadastro realizado com sucesso')
      onRegistro(result);
      navigate('/');

    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao realizar o cadastro. Tente novamente')
    }
  };

  return (
    <RegistroContainer onSubmit={handleSubmitRegistro}>
      <h1>Cadastre-se</h1>

      <Input
        type="text"
        placeholder="Nome"
        value={usuario}
        onChange={(value) => setUsuario(value)}
      />
      
      <Input
        type="text"
        placeholder="Nome da Empresa"
        value={nome_usuario}
        onChange={(value) => setEmpresa(value)}
      />

      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(value) => setEmail(value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(value) => setSenha(value)}
      />
      <Input
        type="address"
        placeholder="Endereco"
        value={endereco}
        onChange={(value) => setEndereco(value)}
      />

      <Input
        type="text"
        maxLength="14"
        placeholder="CNPJ"
        value={cnpj}
        onChange={(value) => setCnpj(value)}
      />           
      
      <Button type="">Registrar</Button>
    </RegistroContainer>
  );
};

export default RegistroForm;