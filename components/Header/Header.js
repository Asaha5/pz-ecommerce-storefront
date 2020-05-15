import React, {useState} from 'react';
import {
    HeaderContainer, MobileHeader, ListItem, HeaderCategories,
    HeaderActions, HeaderLink
} from './styles'
import UserProfilePopover from "../UserProfile/UserProfilePopover";
import {IconButton, Button, Pane} from "evergreen-ui";
import HeaderSearch from "./Search";
import Media from 'react-media';
import ResponsiveSideBar from "./ResponsibeSideBar";

const Header = () => {
    const [isSidebarOpen, setSidebarState] = useState(false)
    return (
        <Media query="(max-width: 768px)">
            {
                matches => matches ?
                    <>
                        <ResponsiveSideBar isShown={isSidebarOpen} onClose={() => setSidebarState(!isSidebarOpen)}/>
                        <HeaderContainer>
                            <MobileHeader>
                                <IconButton icon="menu" intent="info" appearance="minimal" iconSize={30} onClick={() => setSidebarState(!isSidebarOpen)}/>
                                <h2>PZ SHOP</h2>
                                <IconButton icon="shopping-cart" intent="info" appearance="minimal" iconSize={30}/>
                            </MobileHeader>
                            <div style={{display: 'flex', margin: '0 auto'}}>
                                <HeaderSearch/>
                            </div>
                        </HeaderContainer>
                    </>
                    :
                    <HeaderContainer>
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
                                    Sign In
                                </Button>
                            </ListItem>
                            <ListItem>
                                <IconButton icon="shopping-cart" intent="info" appearance="minimal" iconSize={30}/>
                            </ListItem>
                        </HeaderActions>
                    </HeaderContainer>
            }
        </Media>

    )
}

export default Header;