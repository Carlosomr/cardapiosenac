import styled from "styled-components";
export const Container = styled.main`
display: flex;
flex-direction: column;

margin-top: 130px;
border-radius: 15px 15px 0 0;
height: 100px;
min-width: 100%;

button{
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 20%;
    font-size: 16px;
    background: ${({ theme }) => theme.COLORS.Green};
    &:hover{
      background: ${({ theme }) => theme.COLORS.Greenbutton};
      cursor: pointer;
      
}
a{
  text-decoration: none;
  color: black;
  font-size: 18px;
}

`;

export const Botao = styled.main`
div{

display: flex;
flex-direction: row;
justify-content: center;
}





`;