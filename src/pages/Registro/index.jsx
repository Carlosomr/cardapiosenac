import RegistroForm from '../../components/RegistroForm';
import { RegistroContainer, Bloco, BlocoDois } from './styles';

function RegistroPage() {
    const handleRegistro = (credentials) => {
        console.log('Registro:', credentials);
    };

    return(
        <RegistroContainer>
            <img src="https://www.proceso.com.mx/u/fotografias/fotosnoticias/2019/6/25/100602.jpg" alt="" />
            <RegistroForm onRegistro = {handleRegistro} />
        </RegistroContainer>

    );
}

function Registro() {
    return (
        <BlocoDois>
            <RegistroPage />
        </BlocoDois>

    );
}

export default Registro;