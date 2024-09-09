import {Container} from "./styles";
import carrinho from "./../../assets/carrinho.png";


function SemItens (){

    return(
        <Container>
            <div>
                
                <p>Você ainda não tem produtos cadastrados</p>
                <p>Crie seus produtos na <a href="/administrador">tela de administrador</a></p>

                <img src={carrinho}/>
            </div>

        </Container>

    )
}

export default SemItens;