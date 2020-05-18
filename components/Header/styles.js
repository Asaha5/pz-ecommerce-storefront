import styled from "styled-components";
import {Text} from 'evergreen-ui';

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

export const GradientContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 100%;
  clip-path: polygon(5% 0%, 100% 0%, 100% 98%, 0% 100%);
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,136,222,1) 31%, rgba(0,212,255,1) 100%);
`

export const HeaderCategories = styled.ul`
  list-style: none;
  display: flex;
  width: 700px;
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

export const HeaderLink = styled(Text)`
  cursor: pointer;
`;

export const HeaderLogo = styled.h2``;

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`
