import React from 'react';
import Link from 'next/link'
import styles from "../components/Layout/styles.module.scss";
import {HEADER_MENU_ITEMS} from "./constants";

const wrapInLink = (href, text) => <Link href={`/${href}`} passHref><a className={styles.headerLink}>{text}</a></Link>

export const menuItems = HEADER_MENU_ITEMS.map(({text, href}) => {
    return (
        wrapInLink(href, text)
    )
})