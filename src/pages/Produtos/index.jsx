import React, { useState } from 'react';
import { Container, ProfileHeader, Menu, MenuToggle,} from './styles';
import { Header } from '../../components/Header';



function Produtos() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <span><a href="/">Logout</a></span>
        </div>
      </Menu>
      <MenuToggle onClick={toggleMenu} className={isOpen ? 'open' : ''}>
        &#9776; 
      </MenuToggle>
      
    </Container>
  );
}
export default Produtos;