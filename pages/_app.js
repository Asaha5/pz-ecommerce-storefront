import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import AliceCarouselStyles from "../components/Common/GlobalStyles";
import {SWRConfig} from 'swr'
import {request} from "../lib/datocms";
// import 'bootstrap-4-grid/css/grid.min.css'

const theme = {
   themeColor: '#0788DE',
   headerGradientFontColor: '#F7F9FD'
}

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <ThemeProvider theme={theme}>
                <SWRConfig fetcher={request}>
                    <AliceCarouselStyles/>
                    <Component {...pageProps} />
                </SWRConfig>
            </ThemeProvider>
        )
    }
}