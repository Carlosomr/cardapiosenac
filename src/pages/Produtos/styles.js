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
border: solid red;

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
