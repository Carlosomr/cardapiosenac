import styled from 'styled-components';

export const RegistroContainer = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;


  img{
    flex: 1;
    height: 100vh;
    width: 50vh;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    display: flex;
    width: 100%;
    height: 100%;

    img{
      object-fit: cover;
      width: 60%;
    }
  }
  @media (max-width: 400px) {
    display: flex;
    width: 100%;
    height: 100%;

    img{
      object-fit: cover;
      width: 0%;
    }
  }
`;
export const Bloco = styled.main`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f2f5;
    color: #333;
  }

  @media (min-width: 700px) {
    display: flex;
    width: 100%;
    height: 100%;

    
  }
`;

export const BlocoDois = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;


  @media (min-width: 700px) {
    display: flex;
    width: 100%;
    height: 100%;

    
  }
`;