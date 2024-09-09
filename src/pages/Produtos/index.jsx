import React, { useState, useEffect  } from 'react';
import { Container, ProfileHeader, MenuContainer, MenuToggle, Cadastrar } from './styles';
import { Header } from '../../components/Header';
import Input from '../../components/Input';
import axios from 'axios';



function Produtos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [preco, setPreco] = useState('');
  const [usuariosAdmId, setUsuarios] = useState([]); 
  const [usuarioAdmId, setUsuarioSelecionado] = useState("");

  const formData = {
    nome,
    preco,
    imagem,
    usuarioAdmId

  };

  useEffect(() => {
    const fetchUsuarios = async () => {
      const url = "http://localhost:5000/produtos/usuarios";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setUsuarios(json);
      } catch (error) {
        console.error(error.message);
      }
    };

   

    fetchUsuarios();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {


      const response = await fetch('http://localhost:5000/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        
      },  alert('Produto cadastrado com sucesso!'));

     
    } catch (error) {
      console.error('Erro ao adicionar item:', error.response?.data || error.message);
      alert('Falha ao cadastrar produto. Por favor, tente novamente.');
    }
  };



  return (
    <Container>
      <Header />
      <ProfileHeader>
        <img src="https://www.creativefabrica.com/wp-content/uploads/2019/08/Restaurant-Logo-by-Koko-Store-580x386.jpg"></img>
        <div>
          <strong>PegaAí</strong>
          <p>Administrador</p>
        </div>

        <div>
        </div>
      </ProfileHeader>
      <MenuContainer className={isMenuOpen ? 'open' : 'closed'}>
        <ul>
          <li><a href="/administrador">Cadastrar Itens</a></li>
          <li><a href="/registro">Cadastrar acesso a loja</a></li>
          <li><a href="/">Cardapio digital</a></li>
          <li><a href="/administrador/nomes">Consultar Usuarios</a></li>
        </ul>

        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYPP6Hob6Unrvq1qeUHC-FzJdYhx7NV4u2A&s"></img>
          <span><a href="/login">Sair</a></span>
        </div>
      </MenuContainer>
      <MenuToggle onClick={toggleMenu} className={isMenuOpen ? 'open' : ''}>
        &#9776;
      </MenuToggle>

      <Cadastrar>

        <h1>Cadastrar itens da loja</h1>
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <Input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(value) => setNome(value)}
          />

          <label>Url da Logo:</label>
          <Input
            type="text"
            placeholder="Imagem"
            value={imagem}
            onChange={(value) => setImagem(value)}
          />

          <label>Preço:</label>
          <Input
            type="text"
            placeholder="Preço"
            value={preco}
            onChange={(value) => setPreco(value)}
          />

          <label>Usuário:</label>
          <select
          value={usuarioAdmId}
          onChange={(e) => setUsuarioSelecionado(e.target.value)}
        >
          <option value="">Selecione um usuário</option>
          {usuariosAdmId.map((usuario) => (
            <option key={usuario.id} value={usuario.id}>
              {usuario.primeiroNome} {usuario.segundoNome}
            </option>
          ))}
        </select>

          <button type="submit">Cadastrar</button>
        </form>
      </Cadastrar>

    </Container>
  );
}
export default Produtos;