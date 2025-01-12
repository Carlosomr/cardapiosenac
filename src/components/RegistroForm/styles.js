import styled from 'styled-components';

export const RegistroContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 600px;
  height: 50%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  border: solid 1px;
  border-color:rgb(197, 197, 197);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  input{
    font-size: 1.3rem;
  }

  h1{
    margin-bottom: 25px;
    font-size: 2rem;
  }

  @media (max-width: 700px) {
    display: flex;
    width: 100%;
    height: 100%;

  }
`;
