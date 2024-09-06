import React, {useState} from "react";
import Input from '../Input';
import Button from '../Button';
import { RegistroContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const RegistroForm = ({onRegistro}) => {
    const [primeiroNome, setPrimeiroNome] = useState('');
    const [segundoNome, setSegundoNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cep, setCep] = useState('');
    const [cpf , setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [empresa, setEmpresa] = useState('');
    const navigate = useNavigate();


    const handleSubmitRegistro = async (e) => {
        e.preventDefault();
    
        const formData = {
            primeiroNome,
            segundoNome,
            email,
            senha,
            endereco,
            cep,
            cpf,
            cnpj,
            empresa
        };
    
        try {
            const response = await fetch('http://localhost:5000/usuarios', {
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
            onRegistro(result);
            navigate('/login');
    
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <RegistroContainer onSubmit={handleSubmitRegistro}>
            <Input
            type="nome"
            placeholder="Nome"
            value={primeiroNome}
            onChange={(value) => setPrimeiroNome(value)}
            />
            <Input
            type="sobrenome"
            placeholder="Sobrenome"
            value={segundoNome}
            onChange={(value) => setSegundoNome(value)}
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
            type="endereco"
            placeholder="Endereco"
            value={endereco}
            onChange={(value) => setEndereco(value)}
            />
            <Input
            type="cod"
            maxLength="8"
            placeholder="CEP"
            value={cep}
            onChange={(value) => setCep(value)}
            />
            <Input
            type="cod"
            maxLength="11"
            placeholder="CPF"
            value={cpf}
            onChange={(value) => setCpf(value)}
            />
            <Input
            type="cod"
            maxLength="14"
            placeholder="CNPJ"
            value={cnpj}
            onChange={(value) => setCnpj(value)}
            />
             <Input
            type="nomeEmp"
            placeholder="Nome da Empresa"
            value={empresa}
            onChange={(value) => setEmpresa(value)}
            />

            <Button type="">Registrar</Button>
        </RegistroContainer>

    );

};

export default RegistroForm;