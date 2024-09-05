import styled from "styled-components";
export const Container = styled.main`
display: flex;
flex-direction: column;

margin-top: 80px;
border-radius: 15px 15px 0 0;
height: 100px;
min-width: 1400px;

@media (max-width: 1200px) {
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
export const ProfileHeader = styled.div`

background: white;
border-radius: 15px 15px 0 0;
padding-bottom: 25px;


div{
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 100px;
}
img {
    border-radius: 50%;
    width: 130px;
    margin-left: 100px;
    margin-top: 10px;
}
p{
    color: red;
}


`;
export const Menu = styled.div`

display: flex;
flex-direction:column;
justify-content: space-between;

  position: fixed;
  top: 80px;
  left: 0;
  min-width: 270px;
  min-height: 91%;
  background-color: black;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease;
  box-shadow: 5px 0 5px rgba(0,0,0,0.1);
  z-index: 1;
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;


a {
    padding: 10px 20px;
            text-decoration: none;
            font-size: 18px;
            color: #fff;
            display: block;
}
a:hover {
            background-color: #575757;
        }

div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
span{
    color: white;
    font-weight: 100;
}
img{
    border-radius: 50%;
    width: 50px;
    
}
`;
export const MenuToggle = styled.button`
  position: fixed;
  top: 100px;
  right: 30px;
  z-index: 1;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  width: 40px; 
  height: 40px; 
  font-size: 24px; 
  border-radius: 8px; 
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #333;
  box-shadow: 0 0 10px rgba(0,0,0,0.2); 



  &:hover {
    transform: scale(1.05);
    color: white;
  }

  &.open {
    transform: rotate(180deg);
  }
`;
export const Cadastrar = styled.div`
margin: auto;
width: 50%;
display: flex;
flex-direction: column;
gap: 15px;
h1{
    margin: auto;
    font-size: 20px;
    font-weight: 600;
}
form{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
label{
    font-weight: 500;
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
`;

