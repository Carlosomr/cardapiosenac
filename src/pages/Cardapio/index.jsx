import { Header } from '../../components/Header';
import { Itens } from '../../components/Itens';
import {Container, Perfil, Pedidos} from "./styles"




function Cardapio(){

  const produtos = [
    {
      id: 1,
      imagem: "https://www.receiteria.com.br/wp-content/uploads/pizza-de-calabresa-facil-capa.jpg",
      nome: 'Pizza de Calabreza',
      preco: 'R$ 80,00'
    },

    {
      id: 2,
      imagem: "https://images.pexels.com/photos/27650917/pexels-photo-27650917/free-photo-of-comida-alimento-refeicao-pizza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nome: 'Pizza de mussarela',
      preco: 'R$ 90,00'
    },

    {
      id: 3,
      imagem: "https://www.receiteria.com.br/wp-content/uploads/pizza-de-calabresa-facil-capa.jpg",
      nome: 'Pizza de Calabreza',
      preco: 'R$ 80,00'
    },

    {
      id: 4,
      imagem: "https://images.pexels.com/photos/27650917/pexels-photo-27650917/free-photo-of-comida-alimento-refeicao-pizza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nome: 'Pizza de mussarela',
      preco: 'R$ 90,00'
    },
    {
      id: 1,
      imagem: "https://www.receiteria.com.br/wp-content/uploads/pizza-de-calabresa-facil-capa.jpg",
      nome: 'Pizza de Calabreza',
      preco: 'R$ 80,00'
    },

    {
      id: 2,
      imagem: "https://images.pexels.com/photos/27650917/pexels-photo-27650917/free-photo-of-comida-alimento-refeicao-pizza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nome: 'Pizza de mussarela',
      preco: 'R$ 90,00'
    },
  ];



  return(
    
    
    <Container>
      
      <Header/>
    <Perfil>
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYPP6Hob6Unrvq1qeUHC-FzJdYhx7NV4u2A&s"></img>
      <div>
        <strong>Pizzaria Senac</strong>
        <p>Aberto das 18h ás 00h</p>
        </div>

        <div>
        <input type="search" id="search" placeholder="Busque por um item na l  oja"/>
        <button onclick="searchItem()">Buscar</button>
        </div>
       
      </Perfil>
    <Pedidos>
         
          {produtos.map(item => {
            return(
              <Itens
              key={item.id}
              imagem={item.imagem}
              nome={item.nome}
              preco={item.preco}
               />
            
            )
        })}
    </Pedidos>
    </Container>
  )
} 
export default Cardapio;