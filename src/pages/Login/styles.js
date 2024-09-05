import styled from 'styled-components';

export const PageContainer = styled.div`
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

    img{
      object-fit: cover;
      height: 100%;
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
`;

export const Blocod = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;