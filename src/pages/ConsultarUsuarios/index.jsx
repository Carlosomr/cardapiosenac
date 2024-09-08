import { Formulario } from "../../components/Formulario";
import { Header } from "../../components/Header";
import { Container, Botao } from "./styles";
function ConsultarUsuarios (){

    return(
        <Container>
        <Header/>
        <Formulario/>
        <Botao>
            <div>
            <button><a href="/administrador">Voltar</a></button>
            </div>
            
        </Botao>
        </Container>
        

    );
}

export default ConsultarUsuarios;