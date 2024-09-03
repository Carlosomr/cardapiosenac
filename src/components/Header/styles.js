import styled from "styled-components";

export const Profile = styled.header`
    width: 100%;
    margin: 0;
    min-width: 1500px;
    height: 150px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    position: fixed; /* Fixa o header no topo da página */
    top: 0;
    left: 0;
    z-index: -1;
img  { 
    object-fit: cover;

    width: 100%;
    height: 179px;
    
}

@media (min-width: 768px) {
    width:100%

  }

`;