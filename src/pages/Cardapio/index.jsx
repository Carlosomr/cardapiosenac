import { Header } from '../../components/Header';
import { Itens } from '../../components/Itens';
import {Container, Perfil, Pedidos} from "./styles"



function Cardapio(){
  return(
    
    
    <Container>
      
      <Header/>
    <Perfil>
      <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYPP6Hob6Unrvq1qeUHC-FzJdYhx7NV4u2A&s"></img>
      <div>
        <strong>Pizzaria Senac</strong>
        <p>Aberto das 18h ás 00h</p>
      </div>
    </Perfil>

    <Pedidos>
      
    
      
      
        <Itens/>
        <Itens/>
        <Itens/>
        <Itens/>
        <Itens/>
        <Itens/>
        <Itens/>
        <Itens/>
        <Itens/>
        
    
        

        
    </Pedidos>
    
    </Container>
    
    
  )
} 
export default Cardapio;