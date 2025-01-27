import styled from "styled-components";
export const Container = styled.main`

display: flex;
flex-direction: column;
margin-top: 130px;
border-radius: 15px 15px 0 0;
width: 100%;


@media (max-width: 1200px) {
    flex-direction: row;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: white;
  }

  @media (max-width: 700px) {
    flex-direction: row;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: white;

  }

`;
export const Perfil = styled.main`

background: ${({ theme }) => theme.COLORS.grey};
border-radius: 15px 15px 0 0;
padding-bottom: 10rem;
display: flex;
gap: 20px;

.pesquisa{
margin-top: 50px;
display: flex;
flex-direction: row;
gap: 5px;
}

input{

  padding: 10px;
  border: 1px solid #ccc; 
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  width: 500px;
  height: 40%;
  
}
button{
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  height: 40%;
  background: ${({ theme }) => theme.COLORS.Green};

}
button:hover{
    background: ${({ theme }) => theme.COLORS.Greenbutton};
    cursor: pointer;
}

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
}

img {
    border-radius: 50%;
    width: 130px;
    margin-left: 80px;
    margin-top: 30px;
}
p{
    color: ${({ theme }) => theme.COLORS.Green};
    font-weight: 600;
}
a{

  color: black;  
}


@media (max-width: 1200px) {

    display: flex;
    flex-direction: column;
    width: 100%;
    background: white;
    
div{
      padding-top: 20px;
      
    }
.pesquisa{
display: flex;
flex-direction: row;
gap: 5px;
} 

input{

padding: 10px;
border: 1px solid #ccc; 
border-radius: 5px;
margin-bottom: 10px;
font-size: 16px;
width: 500px;
height: 40%;

}
button{
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
margin-bottom: 10px;
font-size: 16px;
height: 40%;
background: ${({ theme }) => theme.COLORS.Green};

}
}
@media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    background: white;
  img{
    margin: auto;
    margin-top: 15px;
  }
    
div{
      padding-top: 20px;
    }
    
.pesquisa{
display: flex;
flex-direction: column;
gap: 5px;
} 

input{
  min-width: 100%;
  margin: auto;
  width: 100%;
  
}
 button{
      min-width: 100%;
      margin: auto;
      }
}

`;

export const Pedidos = styled.main`
background: white;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
padding: 50px;


    @media (max-width: 1200px){
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
    margin: 0;
    background: white;
  }

  @media (max-width: 700px){
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    padding: 0;
    background: white;
  }

  @media (max-width: 470px){
  
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
    background: white;

  }

`;
