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
    background: #B1B1B1; // Cor principal do botão
    color: #FFFFFF; // Cor da fonte
  }
`;
