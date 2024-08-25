import {Produto, ProdutoItem } from "./styles"



export function Itens(){
  return(
    <Produto>
        <ProdutoItem>
            <img src = "https://images.pexels.com/photos/845802/pexels-photo-845802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
         <div>
         <strong>Portuguesa</strong>
         <span>R$40,00</span>
         <p>teste</p>
         </div>
        </ProdutoItem>
    </Produto>
    

    
    
  )
}