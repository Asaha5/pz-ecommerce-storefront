import styled from 'styled-components'
import {Pane} from 'evergreen-ui'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #DDEBF7;
  padding: 0 3rem;
  height: 100px;
`

export const FooterItemsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width : 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, auto));
    gap: 2px;
  }
`

export const CopyRight = styled.div`
  display: flex;
  justify-content: center;
`