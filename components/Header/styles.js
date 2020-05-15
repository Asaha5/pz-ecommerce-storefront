import styled from "styled-components";

export const HeaderContainer = styled.nav`
  font-weight: bold;
  font-family: "Montserrat", sans-serif;

  @media only screen and (max-width : 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 20% 40% 40%;
    justify-items: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #ddebf7;
  }
`;
export const HeaderCategories = styled.ul`
  list-style: none;
  display: flex;
  
  @media only screen and (max-width : 768px) {
    justify-content: space-around;
  }
`;

export const HeaderActions = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width : 768px) {
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  @media (min-width: 992px) {
    margin: 0px 10px;
  }
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const HeaderLogo = styled.h2``;

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  //padding: 0 2rem;
`
