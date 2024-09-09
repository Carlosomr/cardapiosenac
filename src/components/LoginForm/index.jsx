import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { FormContainer } from './styles';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setsenha] = useState('');
  const navigate = useNavigate();

  const formData = {
    email,
    senha,
    
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      } 
      
        
      else {

        console.log('Login Success:');
        navigate('/');
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
