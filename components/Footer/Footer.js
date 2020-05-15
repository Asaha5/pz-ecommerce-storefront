import React from 'react'
import {Pane} from 'evergreen-ui'
import {Heading} from 'evergreen-ui'
import {FooterContainer, FooterItemsContainer, CopyRight} from './styles'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterItemsContainer>
                <Heading size={400} marginTop="default">CONTACT US</Heading>
                <Heading size={400} marginTop="default">SHIPPING & DELIVERY</Heading>
                <Heading size={400} marginTop="default">RETURNS & REFUNDS</Heading>
                <Heading size={400} marginTop="default">TERMS & CONDITION</Heading>
                <Heading size={400} marginTop="default">PRIVACY POLICY</Heading>
                <Heading size={400} marginTop="default">WHOLESALE</Heading>
                <Heading size={400} marginTop="default">BLOG</Heading>
            </FooterItemsContainer>
            <CopyRight>
                <Heading size={400} marginTop="default">@2020 PZ SHOP. All Rights Reserved.</Heading>
            </CopyRight>
        </FooterContainer>
    )
}

export default  Footer;