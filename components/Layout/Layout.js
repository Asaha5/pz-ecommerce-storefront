import React from "react";
import Head from 'next/head'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './styles.module.scss'


const Layout = ({children, style}) => {
    return (
        <div className={styles.layout} style={style}>
            <Head>
                <title>TOYMAGINE</title>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,800;1,900&family=Roboto&display=swap"
                    rel="stylesheet"/>
                {/*<link rel="stylesheet" href="/grid.min.css"/>*/}
                {/*<script src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD"></script>*/}
            </Head>
            <Header />
            <div className={styles.main}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;

