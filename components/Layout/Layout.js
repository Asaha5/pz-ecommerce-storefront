import React from "react";
import Head from 'next/head'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from 'styled-components'
import MainCarousel from "../Common/Carousel/MainCarousel";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-family: 'Roboto', sans-serif;
`

function Layout({children, quantityInCart, style}) {
    return (
        <Container>
            <Head>
                <title>TOYMAGINE</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,800;1,900&family=Roboto&display=swap" rel="stylesheet"/>
                {/*<link rel="stylesheet" href="/grid.min.css"/>*/}
                {/*<script src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD"></script>*/}
            </Head>
            <Header quantityInCart={quantityInCart}/>
            <Main style={style}>
                {children}
            </Main>
            <Footer/>
        </Container>
    )
}

export default Layout;

