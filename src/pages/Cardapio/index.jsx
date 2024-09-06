import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Itens } from '../../components/Itens';
import {Container, Perfil, Pedidos} from "./styles"
import SemItens from '../../components/SemItens';
import {Formulario} from '../../components/Formulario';




function Cardapio({}) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await fetch('https://localhost:5000/produtos');
      const data = await response.json();
      setProdutos(data);
      setCarregando(false)
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      setCarregando(false);
    }
  }

  return(
    
    
    <Container>
      
      <Header/>
    <Perfil>
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYPP6Hob6Unrvq1qeUHC-FzJdYhx7NV4u2A&s"></img>
      <div>
        <strong>nome da loja</strong>
        <p>Aberto das 18h ás 00h</p>
        </div>

        <div>
        <input type="search" id="search" placeholder="Busque por um item na loja"/>
        <button onclick="searchItem()">Buscar</button>
        </div>
       
      </Perfil>
      
      {!carregando && produtos.length === 0 && (
          <SemItens />
        
      )}
      {!carregando && produtos.length > 0 && (
        <Pedidos>
          {produtos.map(item => (
            <Itens
              key={item.id}
              imagem={item.imagem}
              nome={item.nome}
              preco={item.preco}
            />
          ))}
        </Pedidos>
      )}
    </Container>
  )
} 
export default Cardapio;