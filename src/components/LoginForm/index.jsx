import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { FormContainer } from './styles';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setsenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/usuarios');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const usuarios = await response.json();
      const user = usuarios.find(
        (user) => user.email === email && user.senha === senha
      );

      if (user) {
        console.log('Login Success:', user);
        onLogin(user);
      } else {
        console.log('Invalid credentials');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
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
        onChange={(value) => setsenha(value)}
      />
      <Button type="submit">Entrar</Button>
    </FormContainer>
  );
};

export default LoginForm;
