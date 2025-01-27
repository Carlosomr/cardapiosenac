import styled from "styled-components";

export const Produto = styled.div`
display: flex;
flex-direction: row;
background: ${({ theme }) => theme.COLORS.grey};
border: 1px solid  rgb(211, 211, 211);
border-radius: 10px;
width: 400px;
height: 120px;

img{
    width: 150px;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
}
div{
    display: flex;
    flex-direction: column;
    width: 400px;
}
strong{
text-align: center;
margin: 10px;
}
span{
    margin: 10px;
}
p{
 margin-left: 5px;
}

@media (max-width: 400px){
  width: 70%;

}

`;


