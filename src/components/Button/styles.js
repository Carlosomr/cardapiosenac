import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #FF4242;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;


  &:hover {
    background-color:#ff1515;
  }
  &.register-button {
    background:#8d8b8b;
    // Cor principal do botão
    color: #FFFFFF; // Cor da fonte
    width: 100%;
  }

  &.register-button:hover {
   
    background:rgb(85, 84, 84); 
  }

.register-link {
  color: white;
  text-decoration: none;
}
`;
