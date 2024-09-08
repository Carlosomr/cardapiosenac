import styled from 'styled-components';

export const FormDados = styled.div`
display: flex;
flex-direction: column;
width: 100%;
P{
    margin-top: 25px;
    color: green;
    font-size: 18px;
    margin-left: 10px;

}

.formulario-dados{
display: flex;
flex-direction: column;
width: 100%;
margin: 0 auto;
padding-top: 65px;

}
span{
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
}
.dados-container{
    display: flex;
    gap: 50px;
    margin: auto;
    width: 100%;
    height: 100%;
    justify-content: center;
}
@media (max-width: 700px) {
    max-width: 100%;
    

    .dados-container{
        min-width: 100%;
        justify-content:flex-start ;
        gap: 15px;
    }
  }
`;