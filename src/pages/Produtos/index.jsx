import { Header } from "../../components/Header/index.jsx";

import { Pedidos} from "../Cardapio/styles.js";
import {Container,ProfileHeader} from "./styles.js"



function Produtos(){
    

  return(
    <Container>

    <Header/>
    <ProfileHeader>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYPP6Hob6Unrvq1qeUHC-FzJdYhx7NV4u2A&s"/>
      <div>
        <strong>Pizzaria Senac</strong>
        <p>Perfil Administrador</p>
      </div>

      
    </ProfileHeader>

    <Pedidos/>
    </Container>
    
  )
} 
export default Produtos;