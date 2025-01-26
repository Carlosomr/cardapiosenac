import styled from 'styled-components';

export const RegistroContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  input{
    font-size: 1.3rem;
  }

  h1{
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #FF4242 ;
  font-size: 2rem;
  margin-bottom: 15px;
  font-size: 2rem;
  text-align: center;
  }

  @media (max-width: 700px) {
    display: flex;
    width: 100%;
    height: 100%;

  }
`;
