import React, {useState} from 'react';
import {
    HeaderContainer, ChildNavOfHeader, ChildUlOfHeader, ListItem, HeaderCategories,
    HeaderActions, HeaderLink
} from './styles'
import styles from "../Layout/Layout.module.css";
import UserProfilePopover from "../UserProfile/UserProfilePopover";
import {IconButton} from "evergreen-ui";
import HeaderSearch from "./Search";

const Header = () => {
    return (
        <HeaderContainer>
            <ChildNavOfHeader>
                <h2 className={styles["logo"]}>PZ SHOP</h2>
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
                        <UserProfilePopover name={"Arijit Saha"} />
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