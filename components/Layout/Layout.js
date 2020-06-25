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
                <link rel="preload" href="https://www.datocms-assets.com/28152/1592226245-carousel-4.png" as="image" crossorigin/>
                <link rel="preload" href="https://www.datocms-assets.com/28152/1592099498-carousel-2.png" as="image" crossorigin/>
                <link rel="preload" href="https://www.datocms-assets.com/28152/1592099822-carousel-3.jpg" as="image" crossorigin/>
                <link rel="preload" href="https://www.datocms-assets.com/28152/1592226284-carousel-5.jpg" as="image" crossorigin/>
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

