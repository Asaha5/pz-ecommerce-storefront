import React, {useState} from 'react';
import {
    HeaderContainer, ChildNavOfHeader, ChildUlOfHeader, ListItem, HeaderCategories,
    HeaderActions, HeaderLink
} from './styles'
import UserProfilePopover from "../UserProfile/UserProfilePopover";
import {IconButton, Button, Pane} from "evergreen-ui";
import HeaderSearch from "./Search";

const Header = () => {
    return (
        <HeaderContainer>
            <ChildNavOfHeader>
                <h2>PZ SHOP</h2>
                <HeaderCategories>
                    <ListItem>
                        <HeaderLink>Toys</HeaderLink>
                    </ListItem>
                    <ListItem>
                        <HeaderLink>Sales</HeaderLink>
                    </ListItem>
                    <ListItem>
                        <HeaderLink>Wholesales</HeaderLink>
                    </ListItem>
                    <ListItem>
                        <HeaderLink>About Us</HeaderLink>
                    </ListItem>
                </HeaderCategories>
                <HeaderActions>
                    <ListItem>
                        <HeaderSearch/>
                    </ListItem>
                    <ListItem>
                        {/*<UserProfilePopover name={"Arijit Saha"} />*/}
                        <Button height={38} marginRight={10} iconBefore="user" appearance="primary">
                            Login
                        </Button>
                    </ListItem>
                    <ListItem>
                        <IconButton icon="shopping-cart" intent="warning" appearance="minimal" iconSize={30}/>
                    </ListItem>
                </HeaderActions>
            </ChildNavOfHeader>
        </HeaderContainer>
    )
}

export default Header;