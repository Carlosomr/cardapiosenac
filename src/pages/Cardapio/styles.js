import styled from "styled-components";
export const Container = styled.main`

display: flex;
flex-direction: column;

margin-top: 130px;
border-radius: 15px 15px 0 0;
height: 100px;
min-width: 1400px;

@media (max-width: 1200px) {
    flex-direction: row;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    background: white;
  }

  @media (max-width: 700px) {
    flex-direction: row;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    background: white;
  }

`;
export const Perfil = styled.main`

background: ${({ theme }) => theme.COLORS.grey};
border-radius: 15px 15px 0 0;
padding-bottom: 25px;
display: flex;

input{

  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  min-width: 300px;
  font-size: 16px;
}
button{
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  font-size: 16px;
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
    margin-left: 20px;
    margin-top: 10px;
}
p{
    color: ${({ theme }) => theme.COLORS.Green};
    font-weight: 600;
}


@media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: white;
    
div{
      padding-top: 20px;
    }
    

input{
  min-width: 100%;
  margin: auto;
  
}
 button{
      min-width: 100%;
      margin: auto;
      }
}
@media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    background: white;
    
div{
      padding-top: 20px;
    }
    

input{
  min-width: 100%;
  margin: auto;
  
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
    grid-template-columns: repeat(5, 1fr);


    @media (max-width: 1200px){
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
    margin: 0;
    background: white;
  }

  @media (max-width: 700px){
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    background: white;
  }

  @media (max-width: 470px){
  
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    background: white;

  }

`;
