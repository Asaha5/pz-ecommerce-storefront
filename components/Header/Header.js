import React, {useState} from 'react';
import Link from 'next/link'
import {useRecoilState} from "recoil";
import {cart} from "../../lib/atoms";
import {List, Search, Icon} from 'semantic-ui-react'
import styles from './styles.module.scss'

const Header = () => {
    const [isSearchLoading, setSearchLoading] = useState(false)
    const [results, setResults] = useState([])
    const [searchValue, setValue] = useState('')
    const [isSidebarOpen, setSidebarStatus] = useState(false)

    const [cartStatus] = useRecoilState(cart)
    const quantityInCart = cartStatus && cartStatus.reduce((acc, {quantity}) => {
        return acc + quantity
    }, 0)

    const handleSearchChange = (e, {value}) => {
        setValue(value)
    }

    const toggleSidebar = _ => {
        setSidebarStatus(isSidebarOpen => !isSidebarOpen)
    }

    return (
        <div className={`container-fluid ${styles.headerContainer}`}>
            <div className={`row ${styles.notificationBar}`}>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='container'>
                        <div className='row p-2'>
                            <div
                                className='col-md-2 col-xl-2 d-flex justify-content-center justify-content-md-start pb-sm-2'>
                                <Link href={'/'}>
                                    <img
                                        src={'https://www.datocms-assets.com/28152/1591108245-webp-net-resizeimage.jpg'}
                                        width={120} height={120}/>
                                </Link>
                            </div>
                            <div className='col-md-7 col-lg-7 d-none d-md-flex justify-content-end align-items-center'>
                                <Search
                                    loading={isSearchLoading}
                                    onResultSelect={_ => {

                                    }}
                                    onSearchChange={handleSearchChange}
                                    results={results}
                                    value={searchValue}
                                    size='huge'
                                />
                            </div>
                            <div className='col-md-2 d-none d-md-flex justify-content-end align-items-center'>
                                <Icon className={styles.headerIcons} name={'shopping cart'} size={'large'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`row d-none d-md-flex ${styles.headerBar}`}>
                <div className='col-12'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <nav className={styles.navigation}>
                                    <ul>
                                        <li><Link href={`/categories`} passHref><a className={styles.headerLink}>Shop By
                                            Categories<Icon name='angle down' size='large'/></a></Link></li>
                                        <li><Link href={`/price`} passHref><a className={styles.headerLink}>Shop By
                                            Price<Icon name='angle down' size='large'/></a></Link></li>
                                        <li><Link href={`/new`} passHref><a className={styles.headerLink}>Shop
                                            New</a></Link></li>
                                        <li><Link href={`/sale`} passHref><a className={styles.headerLink}>Shop Sale</a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row d-md-none d-lg-none d-xl-none'>
                <div className='col-12 d-flex justify-content-between align-items-center'>
                    <Icon className={styles.headerIcons} name={'bars'} size={'large'}/>
                    <Search
                        loading={isSearchLoading}
                        onResultSelect={_ => {

                        }}
                        onSearchChange={handleSearchChange}
                        results={results}
                        value={searchValue}
                    />
                    <Icon className={styles.headerIcons} name={'shopping cart'} size={'large'}/>
                </div>
            </div>
        </div>
    )
}

export default Header;