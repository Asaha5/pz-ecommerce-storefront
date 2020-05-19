import React, {useState} from 'react';
import {
    HeaderContainer, MobileHeader, ListItem, HeaderCategories,
    HeaderActions, HeaderLink, GradientContainer
} from './styles'
import UserProfilePopover from "../UserProfile/UserProfilePopover";
import {IconButton, Button, Pane} from "evergreen-ui";
import HeaderSearch from "./Search";
import Media from 'react-media';
import ResponsiveSideBar from "./ResponsibeSideBar";
import Link from 'next/link'

const wrapInLink = (href, text) => <Link href={`/${href}`} passHref><HeaderLink size={500}>{text}</HeaderLink></Link>

const Header = () => {
    const [isSidebarOpen, setSidebarState] = useState(false)
    return (
        <Media query="(max-width: 768px)">
            {
                matches => !matches ?
                    <HeaderContainer>
                        <h2>PZ SHOP</h2>
                        {/*<GradientContainer></GradientContainer>*/}
                        <HeaderCategories>
                            <ListItem>
                                {wrapInLink('toys', 'Toys')}
                            </ListItem>
                            <ListItem>
                                {wrapInLink('sales', 'Sales')}
                            </ListItem>
                            <ListItem>
                                {wrapInLink('wholesales', 'Wholesales')}
                            </ListItem>
                            <ListItem>
                                {wrapInLink('about', 'About Us')}
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
                                <IconButton icon="shopping-cart" intent="none" appearance="minimal" iconSize={30}/>
                            </ListItem>
                        </HeaderActions>
                    </HeaderContainer>
                    :
                    <>
                        <ResponsiveSideBar isShown={isSidebarOpen} onClose={() => setSidebarState(!isSidebarOpen)}/>
                        <HeaderContainer>
                            <MobileHeader>
                                <IconButton icon="menu" intent="none" appearance="minimal" iconSize={30}
                                            onClick={() => setSidebarState(!isSidebarOpen)}/>
                                <h2>PZ SHOP</h2>
                                <IconButton icon="shopping-cart" intent="none" appearance="minimal" iconSize={30}/>
                            </MobileHeader>
                            <div style={{display: 'flex', margin: '0 auto'}}>
                                <HeaderSearch/>
                            </div>
                        </HeaderContainer>
                    </>
            }
        </Media>

    )
}

export default Header;