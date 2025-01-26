import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { FormContainer} from './styles';
import { useNavigate, Link} from 'react-router-dom';




const LoginForm = ({ onLogin }) => {
  const [usuario, setEmail] = useState('');
  const [senha, setsenha] = useState('');
  const navigate = useNavigate();

  const formData = {
    usuario,
    senha,
    
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api-steel-tau-36.vercel.app/login', {
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
        alert("Login efetuado")
        navigate('/administrador');
      }

    } catch (error) {
      console.error('Error:', error);
      alert("Usuario ou senha invalido")
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Faça seu Login</h1>
      <Input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(value) => setEmail(value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(value) => setsenha(value)}
      />
      <Button type="submit">Acesse</Button>

      <span>Esqueci a senha</span>
    <div>
    <Button className="register-button">
      <Link className="register-link" to="/registro">Cadastre-se</Link>
      </Button>
    </div>
    </FormContainer>
  );
};

export default LoginForm;
