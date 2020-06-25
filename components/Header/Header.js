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
            <div className='row' style={{background: '#b5651d', height: '10px'}}>
            </div>
            <div className='row px-4 py-2'>
                <div className='col-md-1 col-xl-2 d-flex justify-content-center pb-sm-2'>
                    <Link href={'/'}>
                        <img src={'https://www.datocms-assets.com/28152/1591108245-webp-net-resizeimage.jpg'}
                             width={120} height={120}/>
                    </Link>
                </div>
                <div className='col-md-8 col-lg-7 d-none d-md-flex justify-content-start align-items-center'>
                    <List horizontal size={'large'} relaxed={true}>
                        <List.Item>
                            <List.Content>
                                <List.Header><Link href={`/categories`} passHref><a className={styles.headerLink}>Shop By Categories</a></Link></List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <List.Header><Link href={`/price`} passHref><a className={styles.headerLink}>Shop By Price</a></Link></List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <List.Header><Link href={`/new`} passHref><a className={styles.headerLink}>Shop New</a></Link></List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <List.Header><Link href={`/sale`} passHref><a className={styles.headerLink}>Shop Sale</a></Link></List.Header>
                            </List.Content>
                        </List.Item>
                    </List>
                </div>
                <div className='col-md-1 col-lg-2 d-none d-md-flex justify-content-end align-items-center'>
                    <Search
                        loading={isSearchLoading}
                        onResultSelect={_ => {

                        }}
                        onSearchChange={handleSearchChange}
                        results={results}
                        value={searchValue}
                    />
                </div>
                <div className='col-md-1 d-none d-md-flex justify-content-start align-items-center'>
                    <Icon className={styles.headerIcons} name={'shopping cart'} size={'large'}/>
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