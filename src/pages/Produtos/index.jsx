import React, { useState } from 'react';
import { Container, ProfileHeader, MenuContainer, MenuToggle, Cadastrar} from './styles';
import { Header } from '../../components/Header';
import Input from '../../components/Input';
import axios from 'axios'; 



function Produtos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [preco, setPreco] = useState('');

  // Estado para armazenar todos os itens do cardápio
  const [produtos, setProdutos] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Fazendo a chamada POST à API
      const response = await axios.post('https://localhost:5000/produtos', {
        nome,
        imagem,
        preco,
      });

      console.log('Resposta da API:', response.data);

       // Adicionando o novo item ao estado produtos
       setProdutos([...produtos, response.data]);

       // Limpar os campos após o cadastro
       setNome('');
       setImagem('');
       setPreco('');
 
       alert('Produto cadastrado com sucesso!');
     } catch (error) {
       console.error('Erro ao adicionar item:', error.response?.data || error.message);
       alert('Falha ao cadastrar produto. Por favor, tente novamente.');
     }
   };
 
  
 
  return (
    <Container>
      <Header/>
      <ProfileHeader>
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYPP6Hob6Unrvq1qeUHC-FzJdYhx7NV4u2A&s"></img>
      <div>
        <strong>Pizzaria Senac</strong>
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
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYPP6Hob6Unrvq1qeUHC-FzJdYhx7NV4u2A&s"></img>
        <span><a href="/login">Sair</a></span>
        </div>
      </MenuContainer>
      <MenuToggle onClick={toggleMenu} className={isMenuOpen ? 'open' : ''}>
        &#9776; 
      </MenuToggle> 
      
      <Cadastrar>

        <h1>Cadastrar itens da loja</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <Input
        type="nome"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="imagem">Imagem:</label>
        <Input
        type="imagem"
        placeholder="Imagem"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
        />

        <label htmlFor="preco">Preço:</label>
        <Input
        type="preco"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
        </form>
      </Cadastrar>
      
    </Container>
  );
}
export default Produtos;