
import {Produto} from "./styles"

export function Itens({nome, preco, imagem}){
  return(
    <Produto>
            <img src ={imagem} ></img>
         <div>
         <strong>{nome}</strong>
         <span>R$ {preco}</span>
         <p>Oh gloria, patrão abriu o bolso e pagou o fotografo</p>
         </div>
    </Produto>
    
  )
}
