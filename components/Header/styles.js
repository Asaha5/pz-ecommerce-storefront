import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 0 3rem;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    border-bottom: 1px solid #DDEBF7;
`

export const ChildNavOfHeader = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`

export const ChildUlOfHeader  = styled.ul`
    display: flex;
    list-style: none;
    margin-top: 1rem;
`

export const ListItem = styled.li`
    :not(:last-child) {
        padding-right: 15px;
    }
`

export const HeaderCategories = styled(ChildUlOfHeader)`
    padding: 0 2rem;
`

export const HeaderActions = styled(ChildUlOfHeader)`
    padding: 0 3rem;
`
export const HeaderLink = styled.a`
    text-decoration: none;
    color: inherit;
`

export const HeaderLogo = styled.h2`
    
`