import React, {useContext, useEffect, useState} from 'react';
import {
    HeaderContainer, MobileHeader, ListItem, HeaderCategories,
    HeaderActions, HeaderLink
} from './styles'
import {IconButton, Button, Pill} from "evergreen-ui";
import HeaderSearch from "./Search";
import ResponsiveSideBar from "./ResponsibeSideBar";
import Link from 'next/link'
import AppContext from '../../lib/context'
import {useRecoilState} from "recoil";
import {cart} from "../../lib/atoms";

const wrapInLink = (href, text) => <Link href={`/${href}`} passHref><HeaderLink size={500}>{text}</HeaderLink></Link>

const Header = () => {
    const [isSidebarOpen, setSidebarState] = useState(false)
    const {isMobileDevice} = useContext(AppContext)

    const [cartStatus] = useRecoilState(cart)
    const quantityInCart = cartStatus && cartStatus.reduce((acc, {quantity}) => {
        return acc + quantity
    }, 0)

    return (
        !isMobileDevice ?
            <HeaderContainer>
                <Link href={'/'}>
                    <img src={'/shop-logo.png'} width={90} height={90} style={{cursor: 'pointer'}}/>
                </Link>
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
                        <Button height={38} marginRight={10} iconBefore="user" appearance="primary">
                            Sign In
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Link href={'/cart'}>
                            <Pill display="inline-flex" style={{backgroundColor: '#f2f3f7', color: '#116AB8', fontWeight: 'bold', fontSize: '1rem'}}>
                                <IconButton icon="shopping-cart" intent="none" appearance="minimal" iconSize={30}/>
                                {quantityInCart && quantityInCart}
                            </Pill>
                        </Link>
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
                        <Link href={'/'}>
                            <img src={'/shop-logo.png'} width={90} height={90} style={{cursor: 'pointer'}}/>
                        </Link>
                        <Pill display="inline-flex" style={{backgroundColor: '#f2f3f7', color: '#116AB8', fontWeight: 'bold', fontSize: '1rem'}}>
                            <IconButton icon="shopping-cart" intent="none" appearance="minimal" iconSize={30}/>
                            {quantityInCart && quantityInCart}
                        </Pill>
                    </MobileHeader>
                    <div style={{display: 'flex', margin: '0 auto'}}>
                        <HeaderSearch/>
                    </div>
                </HeaderContainer>
            </>
    )
}

export default Header;