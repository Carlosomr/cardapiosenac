import {Produto, ProdutoItem } from "./styles"

 

export function Itens({nome, preco, imagem}){
  return(
    <Produto>
        <ProdutoItem>
            <img src ={imagem} ></img>
         <div>
         <strong>{nome}</strong>
         <span>{preco}</span>
         </div>
        </ProdutoItem>
    </Produto>
    

    
    
  )
}