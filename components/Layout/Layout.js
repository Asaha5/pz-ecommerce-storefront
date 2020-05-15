import React from "react";
import Head from 'next/head'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from 'styled-components'
import MainCarousel from "../Common/Carousel/MainCarousel";
import ProductGrid from "../Products/ProductGrid";



const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    //& > * {
    //    padding: 0 3rem;
    //}
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    flex-grow: 1;
    font-family: 'Roboto', sans-serif;
`

function Layout({children, showCarousel}) {
    return (
        <Container>
            <Head>
                <title>PZ SHOP</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,800;1,900&family=Roboto&display=swap" rel="stylesheet"/>
            </Head>
            <Header/>
            <Main>
                {showCarousel && <MainCarousel/>}
                {children}
            </Main>
            <Footer/>
        </Container>
    )
}

export default Layout;

