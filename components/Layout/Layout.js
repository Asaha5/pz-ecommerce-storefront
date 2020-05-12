import React from "react";
import styles from './Layout.module.css'
import Head from 'next/head'
import { Avatar, IconButton } from 'evergreen-ui'
import UserProfilePopover from "../UserProfile/UserProfilePopover";
import Header from "../Header/Header";

function Layout({children}) {
    return (
        <div className="wrapper">
            <Head>
                <title>PZ SHOP</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main className={styles["page-main"]}>
                {children}
            </main>
            <footer className={styles["page-footer"]}>
                <small>© Copyright 2020. All rights reserved.</small>
                <ul className={styles['list-style-none-ul']}>
                    <li>
                        <a href="" target="_blank" className={styles['layout-a']}>
                            <i className={styles["icon ion-logo-facebook"]}></i>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank" className={'.footer-a'}>
                            <i className={styles["icon ion-logo-facebook"]}></i>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank" className={'.footer-a'}>
                            <i className={styles["icon ion-logo-facebook"]}></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Layout;

