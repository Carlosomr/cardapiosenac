import React, {useState} from "react";
import Input from '../Input';
import Button from '../Button';
import { RegistroContainer } from "./styles";

const RegistroForm = ({onRegistro}) => {
    const [primeiroNome, setPrimeiroNome] = useState('');
    const [segundoNome, setSegundoNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cep, setCep] = useState('');
    const [cpf , setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');

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
            cnpj
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
            onChange={(e) => setPrimeiroNome(e.target.value)}
            />
            <Input
            type="sobrenome"
            placeholder="Sobrenome"
            value={segundoNome}
            onChange={(e) => setSegundoNome(e.target.value)}
            />
            <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input
            type="senha"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />
            <Input
            type="endereco"
            placeholder="Endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            />
            <Input
            type="cep"
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            />
            <Input
            type="cpf"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            />
            <Input
            type="cnpj"
            placeholder="CNPJ"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            />

            <Button type="">Registrar</Button>
        </RegistroContainer>

    );

};

export default RegistroForm;