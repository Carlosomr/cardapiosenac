import styled from "styled-components";

export const Produto = styled.div`
display: flex;
flex-direction: column;
width: 200px;
height: 250px;
margin: 30px 30px 20px 20px;
background: ${({ theme }) => theme.COLORS.grey};
border-radius: 15px 15px 0 0;


img{
    flex-direction: column;
    max-width: 200px;
    border-radius: 15px 15px 0 0;
}
div{
    display: flex;
    flex-direction: column;
}
span{
    margin: 5px;
}

`;
export const ProdutoItem = styled.div`
display: flex;
flex-direction: column;

`;
