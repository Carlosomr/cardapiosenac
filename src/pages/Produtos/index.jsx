import React, { useState } from 'react';
import { Container, ProfileHeader, Menu, MenuToggle, Cadastrar} from './styles';
import { Header } from '../../components/Header';
import Input from '../../components/Input';



function Produtos() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [preco, setPreco] = useState('');

  // Estado para armazenar todos os itens do cardápio
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Pizza de Calabreza', imagem: 'https://www.receiteria.com.br/wp-content/uploads/pizza-de-calabresa-facil-capa.jpg', preco: 'R$ 80,00' },
    { id: 2, nome: 'Pizza de Mussarela', imagem: 'https://images.pexels.com/photos/27650917/pexels-photo-27650917/free-photo-of-comida-alimento-refeicao-pizza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', preco: 'R$ 90,00' },
    { id: 3, nome: 'Pizza de Calabreza', imagem: 'https://www.receiteria.com.br/wp-content/uploads/pizza-de-calabresa-facil-capa.jpg', preco: 'R$ 80,00' },
    { id: 4, nome: 'Pizza de Mussarela', imagem: 'https://images.pexels.com/photos/27650917/pexels-photo-27650917/free-photo-of-comida-alimento-refeicao-pizza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', preco: 'R$ 90,00' },
  ]);



  const handleSubmit = (event) => {
    event.preventDefault();
    
    try {
      // Simulando um cadastro bem-sucedido
      const novoItem = {
        id: Math.random(),
        nome,
        imagem,
        preco,
      };
      
      // Adicionando o novo item ao estado produtos
      setProdutos([...produtos, novoItem]);
      
      console.log();
      // Limpar os campos após o cadastro
      setNome('');
      setImagem('');
      setPreco('');

    } catch (error) {
      console.error('Erro ao adicionar item:', error);
    }
  };

  return (
    <Container>
      <Header/>
      <ProfileHeader>
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYPP6Hob6Unrvq1qeUHC-FzJdYhx7NV4u2A&s"></img>
      <div>
        <strong>Pizzaria Senac</strong>
        <p>Aberto das 18h ás 00h</p>
        </div>

        <div>
        </div>
      </ProfileHeader>
      <Menu isOpen={isOpen}>
        <ul>
          <li><a href="/administrador">Cadastrar Itens</a></li>
          <li><a href="#services">Cadastrar Usuarios</a></li>
          <li><a href="/cardapio">Cardapio digital</a></li>
        </ul>

        <div>
        <img src= "https://github.com/Carlosomr.png"></img>
        <span><a href="/">Sair</a></span>
        </div>
      </Menu>
      <MenuToggle onClick={toggleMenu} className={isOpen ? 'open' : ''}>
        &#9776; 
      </MenuToggle> 
      
      <Cadastrar>

        <h1>Cadastrar itens da loja</h1>
        <form>
        <label htmlFor="nome">Nome:</label>
        <Input
        type="nome"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setnome(e.target.value)}
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
        </form>
      </Cadastrar>
      
    </Container>
  );
}
export default Produtos;