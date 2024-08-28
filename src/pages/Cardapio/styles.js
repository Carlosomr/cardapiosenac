import styled from "styled-components";
export const Container = styled.main`

display: flex;
flex-direction: column;

margin-top: 130px;
border-radius: 15px 15px 0 0;
height: 100px;
min-width: 1400px;



`;
export const Perfil = styled.main`

background: ${({ theme }) => theme.COLORS.grey};
border-radius: 15px 15px 0 0;
padding-bottom: 25px;
display: flex;




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
    color: ${({ theme }) => theme.COLORS.Green};
    font-weight: 600;
}

`;

export const Pedidos = styled.main`
background: white;

display: grid;
    grid-template-columns: repeat(5, 1fr);

`;
