import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import AliceCarouselStyles from "../components/Common/GlobalStyles"
import {SWRConfig} from 'swr'
import {request} from "../lib/datocms"
import AppContext from '../lib/context'
import Media from 'react-media'

const theme = {
   themeColor: '#0788DE',
   headerGradientFontColor: '#F7F9FD'
}

const mediaQueries = {
    extraSmall: "(max-width: 575.98px)", // Extra small devices (portrait phones, less than 576px)
    small: "(max-width: 767.98px)", // Small devices (landscape phones, less than 768px)
    medium: "(max-width: 991.98px)", // Medium devices (tablets, less than 992px)
    large: "(max-width: 1199.98px)" // Large devices (desktops, less than 1200px)
}

const isMobileDevice = ({extraSmall, small}) => extraSmall || small

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Media queries={mediaQueries}>
                {
                    matches => (
                        <AppContext.Provider value={{
                            isMobileDevice: isMobileDevice(matches)
                        }}>
                            <ThemeProvider theme={theme}>
                                <SWRConfig fetcher={request}>
                                    <AliceCarouselStyles/>
                                    <Component {...pageProps} />
                                </SWRConfig>
                            </ThemeProvider>
                        </AppContext.Provider>
                    )
                }
            </Media>
        )
    }
}