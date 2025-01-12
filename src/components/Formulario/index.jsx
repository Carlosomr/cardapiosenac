import { FormDados } from "./styles"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Formulario() {
  const [usuario, setUsuario] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cnpj, setCnpj] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/usuarios/');
        const dadosRegistro = response.data;
        
        // Atualizar os estados com os dados recebidos
        setUsuario(dadosRegistro.usuario || '');
        setEmpresa(dadosRegistro.nome_usuario || '');
        setEmail(dadosRegistro.email || '');
        setSenha(dadosRegistro.senha || '');
        setEndereco(dadosRegistro.endereco || '');
        setCnpj(dadosRegistro.cnpj || '');
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
            <span>Usuario</span>
            <p>{usuario}</p><br/>
          </div>
          <div className="dado-item">
            <span>Empresa</span>
            <p>{nome_usuario}</p><br/>
          </div>
          <div className="dado-item">
            <span>Senha</span>
            <p>{senha}</p><br/>
          </div>
          <div className="dado-item">
            <span>Endereço</span>
            <p>{endereco}</p><br/>
          </div>
          <div className="dado-item">
            <span>CNPJ</span>
            <p>{cnpj}</p><br/>
          </div>
        </div>
      </div>
    </FormDados>
  );
}