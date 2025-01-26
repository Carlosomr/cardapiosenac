import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { Container, ProfileHeader, MenuContainer, MenuToggle, Cadastrar } from './styles';
import { Header } from '../../components/Header';
import Input from '../../components/Input';
import axios from 'axios';



function Produtos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [nm_produto, setNome] = useState('');
  const [img_url, setImagem] = useState('');
  const [vl_item, setPreco] = useState('');


  const formData = {
    nm_produto,
    vl_item,
    img_url
  };

  useEffect(() => {
    const fetchUsuarios = async () => {
      const url = "https://api-steel-tau-36.vercel.app/itens";
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


      const response = await fetch('https://api-steel-tau-36.vercel.app/cadastrar/itens', {
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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYPP6Hob6Unrvq1qeUHC-FzJdYhx7NV4u2A&s"></img>
        <div>
          <strong>Pizzaria Senac</strong>
          <p>Administrador</p>
        </div>

        <div>
        </div>
      </ProfileHeader>
      <MenuContainer className={isMenuOpen ? 'open' : 'closed'}>
        <ul>
        <li><Link to="/registro">Cadastrar acesso a loja</Link></li>
        <li><Link to="/cardapio">Cardapio digital</Link></li>
        </ul>

        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYPP6Hob6Unrvq1qeUHC-FzJdYhx7NV4u2A&s"></img>
          <span><Link to="/">Sair</Link></span>
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
            value={nm_produto}
            onChange={(value) => setNome(value)}
          />

          <label>Url da Logo:</label>
          <Input
            type="text"
            placeholder="Imagem"
            value={img_url}
            onChange={(value) => setImagem(value)}
          />

          <label>Preço:</label>
          <Input
            type="text"
            placeholder="Preço"
            value={vl_item}
            onChange={(value) => setPreco(value)}
          />


          <button type="submit">Cadastrar</button>
        </form>
      </Cadastrar>

    </Container>
  );
}
export default Produtos;