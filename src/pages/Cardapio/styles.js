import styled from "styled-components";
export const Container = styled.main`

display: flex;
flex-direction: column;

margin-top: 80px;
border-radius: 15px 15px 0 0;
height: 100px;
min-width: 1400px;



`;
export const Perfil = styled.main`
background: white;

border-radius: 15px 15px 0 0;

padding-bottom: 25px;
border-bottom: solid 1px gray;


div{
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
}
img {
    border-radius: 50%;
    width: 130px;
    margin-left: 20px;
    margin-top: 10px;
}
p{
    color: green;
}

`;

export const Pedidos = styled.main`
background: white;

display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;




`;