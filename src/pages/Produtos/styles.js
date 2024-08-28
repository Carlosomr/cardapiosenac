import styled from "styled-components";
export const Container = styled.main`
display: flex;
flex-direction: column;

margin-top: 80px;
border-radius: 15px 15px 0 0;
height: 100px;
min-width: 1400px;


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
    padding: 15px 25px;
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
  width: 40px; // Aumentamos o ancho
  height: 40px; // Aumentamos o alto
  font-size: 24px; // Aumentamos o tamanho da fonte
  border-radius: 8px; // Reduzimos as cantos para um círculo
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #333;
  box-shadow: 0 0 10px rgba(0,0,0,0.2); // Adicionamos sombra para melhor visualização



  &:hover {
    transform: scale(1.05);
    color: white;
  }

  &.open {
    transform: rotate(180deg);
  }
`;


