
import { FormDados } from "./styles"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Formulario() {
  const [primeiroNome, setPrimeiroNome] = useState('');
  const [segundoNome, setSegundoNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [empresa, setEmpresa] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://seu-endereco-da-api.com/registro');
        const dadosRegistro = response.data;
        
        // Atualizar os estados com os dados recebidos
        setPrimeiroNome(dadosRegistro.primeiroNome || '');
        setSegundoNome(dadosRegistro.segundoNome || '');
        setEmail(dadosRegistro.email || '');
        setSenha(dadosRegistro.senha || ''); // Note que exibir senhas é geralmente uma má prática de segurança
        setEndereco(dadosRegistro.endereco || '');
        setCep(dadosRegistro.cep || '');
        setCpf(dadosRegistro.cpf || '');
        setCnpj(dadosRegistro.cnpj || '');
        setEmpresa(dadosRegistro.empresa || '');
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    }

    fetchData();
  }, []);

  return (

    <FormDados>
    <div className="formulario-dados">
      <h1>{empresa ? empresa : 'Dados da Empresa e Usuários'}</h1>
      <div className="dados-container">
        <div className="dado-item">
          <span>Nome:</span>
          <p>{primeiroNome} {segundoNome}</p>
        </div>
        <div className="dado-item">
          <span>E-mail:</span>
          <p>{email}</p>
        </div>
        <div className="dado-item">
          <span>Senha:</span>
          <p>{senha ? '******' : ''}</p>
        </div>
        <div className="dado-item">
          <span>Endereço:</span>
          <p>{endereco}</p>
        </div>
        <div className="dado-item">
          <span>CEP:</span>
          <p>{cep}</p>
        </div>
        <div className="dado-item">
          <span>CPF:</span>
          <p>{cpf}</p>
        </div>
        <div className="dado-item">
          <span>CNPJ:</span>
          <p>{cnpj}</p>
        </div>
        <div className="dado-item">
          <span>Nome da Empresa:</span>
          <p>{empresa}</p>
        </div>
      </div>
    </div>
    </FormDados>
  );
}
