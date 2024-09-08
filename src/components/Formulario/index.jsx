
import { FormDados } from "./styles"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Formulario() {
  const [primeiroNome, setPrimeiroNome] = useState('');
  const [segundoNome, setSegundoNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [empresa, setEmpresa] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://localhost:5000/registro');
        const dadosRegistro = response.data;
        
        // Atualizar os estados com os dados recebidos
        setPrimeiroNome(dadosRegistro.primeiroNome || '');
        setSegundoNome(dadosRegistro.segundoNome || '');
        setEmail(dadosRegistro.email || '');
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
      
      <div className="dados-container">
        <div className="dado-item">
          <span>Nome</span>
          <p>{primeiroNome} {segundoNome}</p><br/>
        </div>
        <div className="dado-item">
          <span>E-mail</span>
          <p>{email}</p><br/>
        </div>
        
        <div className="dado-item">
          <span>Endereço</span>
          <p>{endereco}</p> <br/>
        </div>
        <div className="dado-item">
          <span>CEP</span>
          <p>{cep}</p><br/>
        </div>
        <div className="dado-item">
          <span>CPF</span>
          <p>{cpf}</p><br/>
        </div>
        <div className="dado-item">
          <span>CNPJ</span>
          <p>{cnpj}</p><br/>
        </div>
        <div className="dado-item">
          <span>Empresa</span>
          <p>{empresa}</p><br/>
        </div>
        </div>
      </div>
    </FormDados>
  );
}
