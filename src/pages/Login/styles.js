import styled from 'styled-components';

export const PageContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FBFBFB;


  img{
    height: 100vh;
    width: 50%;
    margin-right: auto;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    display: flex;
    width: 100%;

    img{
      object-fit: cover;
      height: 100%;
    }

    @media (max-width: 700px) {
    display: flex;
    width: 100%;
    height: 100%;

    img{
      object-fit: cover;
      width: 50%;
      
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

  }
`;
export const Bloco = styled.main`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  body {
    font-family: 'Arial', sans-serif;
    background-color: #F1F1F1;
    color: #333;
  }
`;

export const Blocod = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;