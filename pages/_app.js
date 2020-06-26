import App from 'next/app'
import React from 'react'
import '../styles/global.css'
import '../styles/grid.min.css'
import {RecoilRoot} from 'recoil'
import {SWRConfig} from 'swr'
import {request} from "../lib/datocms"
import AppContext from '../lib/context'
// import Media from 'react-media'
import 'semantic-ui-css/semantic.min.css'

// const mediaQueries = {
//     extraSmall: "(max-width: 575.98px)", // Extra small devices (portrait phones, less than 576px)
//     small: "(max-width: 767.98px)", // Small devices (landscape phones, less than 768px)
//     medium: "(max-width: 991.98px)", // Medium devices (tablets, less than 992px)
//     large: "(max-width: 1199.98px)" // Large devices (desktops, less than 1200px)
// }

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <RecoilRoot>
                <AppContext.Provider>
                    <SWRConfig fetcher={request}>
                        <Component {...pageProps} />
                    </SWRConfig>
                </AppContext.Provider>
            </RecoilRoot>
        )
    }
}