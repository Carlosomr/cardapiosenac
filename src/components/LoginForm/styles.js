import styled from 'styled-components';

export const FormContainer = styled.form`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-right: auto;
  width: 27.86vw;
  padding: 20px;
  background-color: #FBFBFB ;

  input {
    font-size: 1.3rem;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #FF4242;
    font-size: 2rem;
    margin-bottom: 25px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    font-weight: 500;
  }

  span {
    font-size: 1rem;
    font-weight: 300;
    padding: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
div{
  margin-top: 60px;
  display: flex;
  flex-direction: row;
}
@media (max-width: 700px) {
  width: 100%;
}
`;

